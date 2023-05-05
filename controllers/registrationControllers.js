const Registration = require('./Users.js');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

            const { email, password, auth } = req.body;
            const candidate = await Registration.findOne({ email })
            if (candidate) {
                return res.status(400).json({ message: "Така пошта зареєстрована" })

            }
            const hashedPassword = await bcrypt.hash(password, 7)
            const user = new Registration({ email, password: hashedPassword, auth })
            await user.save()
            return res.json({ message: "Успішно зареєструвався" });
        } catch (e) {
            res.status(500).json(e)
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

            const { email, password, auth } = req.body;
            const candidate = await Registration.findOne({ email })
            if (!email) {
                return res.status(400).json({ message: 'Не знайдено' })
            }
            const ismatch = bcrypt.compare(password, candidate.password)
            if (!ismatch) {
                return res.status(400).json({ message: 'Не знайдено' })
            }

            const jwtSecret = 'd63274237hc0890cjjk84c';
            const token = jwt.sign({ userId: candidate.id },
                jwtSecret, { expiresIn: '1h' }
            )
            return res.json({ token, userId: candidate.id })


        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new RegistrationControllers();