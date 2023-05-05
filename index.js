const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/router');
// const fileUpload from 'express-fileupload'
const cors = require('cors');
const path = require('path');

var PORT = process.env.PORT || 5000;
const bd_url = `mongodb+srv://dmitrijevv:qwerty1234@cluster0.1pl8iqe.mongodb.net/`;


const app = express();

app.use(express.json({ extend: true }));
app.use(cors());
app.use(express.static('static'));
// app.use(fileUpload({}));
app.use('/api', router);
app.use('/images', express.static(path.join(__dirname, 'images')));


app.get('/', (req, res) => {
    res.end('<h1>Welcome</h1>')
})

async function startApp() {
    try {
        await mongoose.connect(bd_url, { useUnifiedTopology: true, useNewUrlParser: true });
        app.listen(PORT, () => {
            console.log('server started on port ' + PORT)
        })
    } catch (error) {
        console.log(error);
    }
}

startApp()
