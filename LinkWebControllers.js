const LinkWebService = require('./LinkWebService.js')


class LinkWebControllers {
    async create(req, res) {
        try {
            const linkweb = await LinkWebService.create(req.body)
            return res.json(linkweb && { message: "Успішно додано" })
        } catch (e) {
            res.status(500).json(e)
            console.log(e)
        }
    }

    async getAll(req, res) {
        try {
            const linkweb = await LinkWebService.getAll();
            return res.json(linkweb);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const linkweb = await LinkWebService.getOne(req.params.id)
            return res.json(linkweb);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedLinkWeb = await LinkWebService.update(req.body);
            return res.json(updatedLinkWeb);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
            const linkweb = await LinkWebService.delete(req.params.id);
            return res.json(linkweb)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new LinkWebControllers();