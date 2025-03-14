import ProductsRepository from './repositories'

class ProductsService {
  async getLatestAndGreatest() {
    return await ProductsRepository.getLatestAndGreatest()
  }
}

export default new ProductsService()
