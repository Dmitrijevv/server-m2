const ProductService = require('../service/productService')


class ProductControllers {
    async create(req, res) {
        try {
            const post = await ProductService.create(req.body)
            return res.json(post && { message: "Упішно" })
        } catch (e) {
            res.status(500).json(e)
            console.log(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await ProductService.getAll();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const product = await ProductService.getOne(req.params.id)
            return res.json(product);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedProduct = await ProductService.update(req.body);
            return res.json(updatedProduct);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
            const product = await ProductService.delete(req.params.id);
            return res.json(product)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new ProductControllers();