const { Router } = require('express')
const router = Router()
const User = require('../module/User.js')

router.post('/registrations', async(req, res) => {
    try {
        const { email, password } = req.body

        const cantidate = await User.findOne({ email })

        if (cantidate) {
            return res.status(300).json({ message: 'Така пошта вже зареєстрована, спробуй іншу' })
        }
        const user = new User({
            email,
            password
        })
        await user.save()
        return res.status(201).json({ message: 'Ви зареєструвалися' })

    } catch (error) {
        console.log(error);
    }
})