const Product = require('./Product.js')


class ProductService {
    async create(product) {
        const createdProduct = await Product.create({...product });
        return createdProduct;
    }
    ProductService
    async getAll() {
        const products = await Product.find();
        return products;
    }
    async getOne(id) {

        if (!id) {
            throw new Error('id немає в параметрах')
        }
        const product = await Product.findById(id);
        return product;
    }
    async update(product) {
        if (!product._id) {
            throw new Error('id немає в параметрах')
        }
        const updatedProduct = await Product.findByIdAndUpdate(product._id, product, { new: true });
        return updatedProduct;
    }
    async delete(id) {
        if (!id) {
            throw new Error('id немає в параметрах')
        }
        const product = await Product.findByIdAndDelete(id);
        return product;
    }
}

module.exports = new ProductService();