const { userInfo } = require('os');
const db = require('../Models/dbModel');

const User = db.user;

exports.createUser = async (req, res) => {
    if (!req.body.name) {
        res.status(400).send({ message: 'Nao pode estar vazio!' });
        return;
    }
    if (!req.body.age) {
        res.status(400).send({ message: 'Nao pode estar vazio!' });
        return;
    }
    if (!req.body.maritalStatus) {
        res.status(400).send({ message: 'Nao pode estar vazio!' });
        return;
    }
    if (!req.body.CPF) {
        res.status(400).send({ message: 'Nao pode estar vazio!' });
        return;
    }
    if (!req.body.state) {
        res.status(400).send({ message: 'Nao pode estar vazio!' });
        return;
    }
    if (!req.body.city) {
        res.status(400).send({ message: 'Nao pode estar vazio!' });
        return;
    }
    const user = new User(req.body);

    try {
        await user.save((err) => {
            if (err) {
                res.send(err.message);
                return;
            }
            res.send('success');
        });
    } catch (error) {
        res.status(500).send({
            message: error.message,
        });
    }
};

exports.findAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.send(allUsers);
    } catch (error) {
        res.status(500).send({
            message: 'Nao foi possivel encontrar os usuários cadastrados',
        });
    }
};

exports.removeUser = async (req, res) => {
    try {
        const id = req.params.id;
        const removeUser = await User.findByIdAndRemove(id);
        if (!removeUser) {
            res.status(404).send({
                message: 'Nao foi possive encontrar com id=' + id,
            });
            return;
        }
        res.send('success');
    } catch (error) {
        res.status(500).send({
            message: 'Nao foi possivel deletar usuario ! ',
        });
    }
};
exports.getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const getUser = await User.find({ _id: id });
        if (!getUser) {
            res.status(404).send({
                message: 'Nao foi possive encontrar com id=' + id,
            });
            return;
        }
        res.send(getUser);
    } catch (error) {
        res.status(500).send({
            message: 'Nao foi possivel deletar usuario! ',
        });
    }
};

exports.UpdateUser = async (req, res) => {
    try {
        if (!req.body.name) {
            res.status(400).send({ message: 'Nao pode estar vazio!' });
            return;
        }
        if (!req.body.age) {
            res.status(400).send({ message: 'Nao pode estar vazio!' });
            return;
        }
        if (!req.body.maritalStatus) {
            res.status(400).send({ message: 'Nao pode estar vazio!' });
            return;
        }
        if (!req.body.CPF) {
            res.status(400).send({ message: 'Nao pode estar vazio!' });
            return;
        }
        if (!req.body.state) {
            res.status(400).send({ message: 'Nao pode estar vazio!' });
            return;
        }
        if (!req.body.city) {
            res.status(400).send({ message: 'Nao pode estar vazio!' });
            return;
        }
        const id = req.params.id;
        const update = await User.findByIdAndUpdate({ _id: id }, req.body);
        if (!update) {
            res.status(404).send({
                message: 'Nao foi possive encontrar o usuario!',
            });
            return;
        }

        res.send('success');
    } catch (error) {
        res.status(500).send({
            message: 'Nao foi possivel Editar usuario!',
        });
    }
};
