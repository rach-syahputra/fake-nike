import { prisma } from '../../utils/prisma'
import { GetProductsRequest } from './interfaces'

class ProductsRepository {
  async getLatestAndGreatest() {
    const products = await prisma.productStyle.findMany({
      include: {
        product: {
          select: {
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

    return products.map((product) => ({
      id: product.id,
      slug: product.slug,
      title: product.product.title,
      category: product.product.category.label,
      image: product.ProductImage[0].url,
      price: product.product.price,
      createdAt: product.createdAt
    }))
  }

  async getProducts({
    q,
    limit,
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
            createdAt: order || 'asc'
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

    const products = await prisma.productStyle.findMany({
      include: {
        product: {
          select: {
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
      take: limit
    })

    return products.map((product) => ({
      id: product.id,
      slug: product.slug,
      title: product.product.title,
      category: product.product.category.label,
      image: product.ProductImage[0].url,
      price: product.product.price,
      createdAt: product.createdAt
    }))
  }

  async getDetailProduct(productStyleSlug: string) {
    const product = await prisma.productStyle.findUnique({
      select: {
        id: true,
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

    return {
      id: product?.id,
      title: product?.product.title,
      description: product?.product.description,
      category: {
        id: product?.product.category.id,
        label: product?.product.category.label
      },
      images: product?.ProductImage,
      sizes: product?.ProductSize.map((size) => ({
        id: size.size.id,
        label: size.size.label
      })),
      price: product?.product.price,
      createdAt: product?.createdAt
    }
  }
}

export default new ProductsRepository()
