const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const user = require('../Controller/userController');
const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
    origin: 'http://localhost:3000/',
    credentials: true,
};

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require('../Models/dbModel');
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch((err) => {
        console.log('Nao foi possivel conectar no banco de dados!', err);
        process.exit();
    });

app.post('/user', (req, res) => user.createUser(req, res));

app.get('/user', (req, res) => user.findAllUsers(req, res));

app.delete('/user/:id', (req, res) => user.removeUser(req, res));

app.get('/user/:id', (req, res) => user.getUser(req, res));

app.put('/user/:id', (req, res) => user.UpdateUser(req, res));

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`);
});
