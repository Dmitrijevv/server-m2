const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const http = require('http');
const router = require('./routes/router');
const cors = require('cors');
const path = require('path');
// const fileUpload from 'express-fileupload'

var port = process.env.PORT || 5000;



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


// const server = http.createServer(app);

const url = process.env.MONGODB_URL
// const url = process.env.MONGODB_URL || 'mongodb+srv://dmitrijevv:qwerty1234@cluster0.1pl8iqe.mongodb.net/'

async function startApp() {
    mongoose.set('strictQuery', false);
await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Mongodb connected");
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}).catch((err) => {
  console.log({ err });
  process.exit(1);
});
}

// async function startApp() {
//     try {
//         await mongoose.connect(process.env.MONGODB_URL, 
//             { useUnifiedTopology: true, useNewUrlParser: true, strictQuery: false });
//         app.listen(PORT, () => {
//             console.log('server started on port ' + PORT)
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }



startApp()
