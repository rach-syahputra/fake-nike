import { prisma } from '../../utils/prisma'
import {
  CheckProductStyleOwnershipRequest,
  GetProductDetailRequest,
  GetProductsRequest
} from './interfaces'

class ProductsRepository {
  async getLatestAndGreatest() {
    const productStyles = await prisma.productStyle.findMany({
      include: {
        product: {
          select: {
            slug: true,
            price: true,
            title: true,
            category: {
              select: {
                label: true
              }
            }
          }
        },
        ProductImage: {
          select: {
            url: true
          },
          orderBy: {
            position: 'asc'
          },
          take: 1
        }
      },
      orderBy: {
        product: {
          price: 'desc'
        }
      },
      where: {
        displayedOnSearch: true
      },
      take: 10
    })

    return {
      products: productStyles.map((product) => ({
        slug: product.product.slug,
        title: product.product.title,
        category: product.product.category.label,
        price: product.product.price,
        productStyle: {
          id: product.id,
          slug: product.slug,
          image: product.ProductImage[0].url,
          createdAt: product.createdAt
        }
      }))
    }
  }

  async getProducts({
    q,
    limit,
    cursor,
    order,
    sortBy,
    categories,
    sizes
  }: GetProductsRequest) {
    limit ||= 10

    const orderByConfig =
      sortBy === 'price'
        ? {
            product: {
              price: order || 'asc'
            }
          }
        : {
            createdAt: order || 'desc'
          }

    const categoryConfig =
      categories && categories.length > 0
        ? {
            id: {
              in: categories
            }
          }
        : undefined

    const sizeConfig = sizes?.map((size) => ({
      ProductSize: {
        some: {
          sizeId: size
        }
      }
    }))

    const cursorConfig = cursor ? { id: cursor } : undefined

    const [productStyles, totalProducts] = await prisma.$transaction([
      prisma.productStyle.findMany({
        include: {
          product: {
            select: {
              slug: true,
              price: true,
              title: true,
              category: {
                select: {
                  label: true
                }
              }
            }
          },
          ProductImage: {
            select: {
              url: true
            },
            orderBy: {
              position: 'asc'
            },
            take: 1
          }
        },
        orderBy: orderByConfig,
        where: {
          displayedOnSearch: true,
          product: {
            title: {
              contains: q,
              mode: 'insensitive'
            },
            category: categoryConfig
          },
          AND: sizeConfig
        },
        take: limit,
        cursor: cursorConfig,
        skip: cursor ? 1 : 0
      }),
      prisma.productStyle.count({
        where: {
          displayedOnSearch: true,
          product: {
            title: {
              contains: q,
              mode: 'insensitive'
            },
            category: categoryConfig
          },
          AND: sizeConfig
        }
      })
    ])

    return {
      products: productStyles.map((product) => ({
        slug: product.product.slug,
        title: product.product.title,
        category: product.product.category.label,
        price: product.product.price,
        productStyle: {
          id: product.id,
          slug: product.slug,
          image: product.ProductImage[0].url,
          createdAt: product.createdAt
        }
      })),
      pagination: {
        total: totalProducts || 0,
        cursor:
          productStyles.length > 0
            ? productStyles[productStyles.length - 1].id
            : null
      }
    }
  }

  async getProductDetail({
    productSlug,
    productStyleSlug
  }: GetProductDetailRequest) {
    const [productStylePreviews, productStyle] = await prisma.$transaction([
      prisma.productStyle.findMany({
        where: {
          product: {
            slug: productSlug
          }
        },
        select: {
          slug: true,
          ProductImage: {
            select: {
              url: true
            },
            orderBy: {
              position: 'asc'
            },
            take: 1
          }
        }
      }),
      prisma.productStyle.findUnique({
        select: {
          slug: true,
          createdAt: true,
          product: {
            select: {
              id: true,
              title: true,
              description: true,
              price: true,
              category: {
                select: {
                  id: true,
                  label: true
                }
              }
            }
          },
          ProductImage: {
            select: {
              url: true
            },
            orderBy: {
              position: 'asc'
            }
          },
          ProductSize: {
            select: {
              size: {
                select: {
                  id: true,
                  label: true
                }
              }
            }
          }
        },
        where: {
          slug: productStyleSlug
        }
      })
    ])

    if (productStylePreviews && productStyle) {
      return {
        product: {
          slug: productSlug,
          title: productStyle.product.title,
          description: productStyle.product.description,
          category: {
            id: productStyle.product.category.id,
            label: productStyle.product.category.label
          },
          price: productStyle.product.price,
          productStyle: {
            slug: productStyle.slug,
            images: productStyle.ProductImage,
            sizes: productStyle.ProductSize.map((size) => ({
              id: size.size.id,
              label: size.size.label
            })),

            createdAt: productStyle.createdAt
          },
          productStylePreviews: productStylePreviews.map((product) => ({
            slug: product.slug,
            image: product.ProductImage[0].url
          }))
        }
      }
    }
  }

  async getCartProducts(productStyleSlugs: string[]) {
    const [totalProducts, productStyles] = await prisma.$transaction([
      prisma.productStyle.count({
        where: {
          slug: {
            in: productStyleSlugs
          }
        }
      }),
      prisma.productStyle.findMany({
        include: {
          product: {
            select: {
              slug: true,
              price: true,
              title: true,
              category: {
                select: {
                  label: true
                }
              }
            }
          },
          ProductImage: {
            select: {
              url: true
            },
            orderBy: {
              position: 'asc'
            },
            take: 1
          }
        },
        where: {
          slug: {
            in: productStyleSlugs
          }
        }
      })
    ])

    return {
      products: productStyles.map((product) => ({
        slug: product.product.slug,
        title: product.product.title,
        category: product.product.category.label,
        price: product.product.price,
        productStyle: {
          id: product.id,
          slug: product.slug,
          image: product.ProductImage[0].url,
          createdAt: product.createdAt
        }
      })),
      pagination: {
        total: totalProducts || 0,
        cursor:
          productStyles.length > 0
            ? productStyles[productStyles.length - 1].id
            : null
      }
    }
  }

  async getProductStylePreviews(productSlug: string) {
    const products = await prisma.productStyle.findMany({
      select: {
        slug: true,
        ProductImage: {
          select: {
            url: true
          },
          orderBy: {
            position: 'asc'
          },
          take: 1
        }
      },
      where: {
        product: {
          slug: productSlug
        }
      }
    })

    return {
      products: products.map((product) => ({
        slug: product.slug,
        image: product.ProductImage[0].url
      }))
    }
  }

  async checkProductStyleOwnership({
    productStyleSlug
  }: CheckProductStyleOwnershipRequest) {
    const product = await prisma.productStyle.findUnique({
      select: {
        product: {
          select: {
            slug: true
          }
        }
      },
      where: {
        slug: productStyleSlug
      }
    })

    return product?.product
  }
}

export default new ProductsRepository()
