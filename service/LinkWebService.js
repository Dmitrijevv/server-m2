const LinkWeb = require('../api/LinkWeb.js')

class LinkWebService {
    async create(linkweb) {
        const createdLink = await LinkWeb.create({...linkweb });
        return createdLink;
    }
    LinkWebService
    async getAll() {
        const links = await LinkWeb.find();
        return links;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('id немає в параметрах')
        }
        const linkweb = await LinkWeb.findById(id);
        return linkweb;
    }
    async update(linkweb) {
        if (!linkweb._id) {
            throw new Error('id немає в параметрах')
        }
        const updatedLinkWeb = await LinkWeb.findByIdAndUpdate(linkweb._id, linkweb, { new: true });
        return updatedLinkWeb;
    }
    async delete(id) {
        if (!id) {
            throw new Error('id немає в параметрах')
        }
        const linkweb = await LinkWeb.findByIdAndDelete(id);
        return linkweb;
    }
}

module.exports = new LinkWebService();