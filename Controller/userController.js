const { userInfo } = require('os');
const db = require('../Models/dbModel');

const User = db.user;

exports.createUser = async (req, res) => {
    if (!req.body.name) {
        res.status(400).send({ message: 'Nao pode estar vazio!' });
        return;
    }
    const user = new User(req.body);

    try {
        await user.save((err) => {
            if (err) {
                console.log(err);
                res.send(err.message);
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
    const allUsers = await User.find();
    res.send(allUsers);
};
exports.removeUser = async (req, res) => {
    const id = req.params.id;

    const allUsers = await User.find();
    res.send(allUsers);
};
exports.deleteUser = (req, res) => {};
