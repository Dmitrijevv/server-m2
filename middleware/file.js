const multer = require('multer');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'images/', )
    },
    filename(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

const types = ['images/png', 'images/jpeg', 'images/jpg']

const fileFilter = (req, file, cb) => {
    if (types.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

module.exports = multer({ storage, fileFilter })