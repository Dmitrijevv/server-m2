// const Registration = require('../api/Users.js');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../module/User.js')
const Role = require('../api/Role.js')
const {secret} = require('./config.js')


const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}


class RegistrationControllers {
    async create(req, res) {
        try {

            const errors = validationResult(req, res);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'не коректні дані'
                })
            }

            const {username, email, password } = req.body;
            const candidate = await User.findOne({ email })
            if (candidate) {
                return res.status(400).json({ message: "Така пошта зареєстрована" })

            }
            const hashedPassword = await bcrypt.hashSync(password, 7)
            const userRole = await Role.findOne({value: "USER"})
            const user = new User({username, email, password: hashedPassword, roles: [userRole.value]})
            await user.save()
            return res.json({ message: "Успішно зареєструвався" });
        } catch (e) {
            console.log(e)
            res.status(400).json({message: "error"})
        }
    }
    async getUsers(req, res){
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.log(e)
        }
    }
    async login(req, res) {
        try {

            const errors = validationResult(req, res);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'не коректні дані'
                })
            }

            const { email, password } = req.body;
            const user = await User.findOne({ email })
            if (!email) {
                return res.status(400).json({ message: 'Не знайдено' })
            }
            const ismatch = bcrypt.compare(password, user.password)
            if (!ismatch) {
                return res.status(400).json({ message: 'Не знайдено' })
            }
            const token = generateAccessToken(user._id, user.roles)
            return res.json({token}, user.username)


        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Error login'})
        }
    }
}

module.exports = new RegistrationControllers();