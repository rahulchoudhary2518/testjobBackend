var express = require('express');
var router = express.Router();
const users = require('../controllers/users')

/* GET users listing. */
router.post('/usersemail',users.usersEmail);

module.exports = router;

