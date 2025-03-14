import { prisma } from '../../utils/prisma'

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
      take: 10
    })

    return products.map((product) => ({
      id: product.id,
      slug: product.slug,
      title: product.product.title,
      category: product.product.category.label,
      image: product.ProductImage[0].url,
      price: product.product.price,
      displayedOnSearch: product.displayedOnSearch,
      createdAt: product.createdAt
    }))
  }
}

export default new ProductsRepository()
