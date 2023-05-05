const Router = require('express');
const PostControllers = require('../controllers/postControllers');
const ProductControllers = require('../controllers/productControllers.js');
const LinkWebControllers = require('../controllers/LinkWebControllers.js');
const RegistrationControllers = require('../controllers/registrationControllers.js');
const router = new Router();
//const fileMiddleware = require('./middleware/file.js')
const { check } = require('express-validator');

router.post('/posts', PostControllers.create)
router.get('/posts', PostControllers.getAll)
router.get('/posts/:id', PostControllers.getOne)
router.put('/posts', PostControllers.update)
router.delete('/posts/:id', PostControllers.delete)

router.post('/products', ProductControllers.create)
router.get('/products', ProductControllers.getAll)
router.get('/products/:id', ProductControllers.getOne)
router.put('/products', ProductControllers.update)
router.delete('/products/:id', ProductControllers.delete)

router.post('/linkwebs', LinkWebControllers.create)
router.get('/linkwebs', LinkWebControllers.getAll)
router.get('/linkwebs/:id', LinkWebControllers.getOne)
router.put('/linkwebs', LinkWebControllers.update)
router.delete('/linkwebs/:id', LinkWebControllers.delete)


router.post('/upload', (req, res) => {
    try {

    } catch (error) {
        console.log(error)
    }
})

router.post('/registration', [
        check('email', 'Не правильний email').isEmail(),
        check('password', 'Не коректний пароль').isLength({ min: 4 })
    ],
    RegistrationControllers.create)
router.post('/login', [
    check('email', 'Не правильний email').isEmail(),
    check('password', 'Не коректний пароль').exists()
], RegistrationControllers.login)
router.delete('/login', )

module.exports = router;