var Sequelize = require('sequelize');
const users = require('../models').User
module.exports = {
    usersEmail(req, res) {
        try {
            return users.bulkCreate(req.body.email).then(result => {
                return res.status(200).send({result,status:true});
            }).catch(err => {
                return res.status(400).send(err);
            })
        } catch (err) {
            return res.status(500).send(err);
        }
    }
}