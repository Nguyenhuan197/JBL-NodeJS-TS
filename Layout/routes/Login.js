"use strict";
let express_Login = require('express');
let Router_Login = express_Login.Router();
let { View_Login, Check_Login } = require('../Controllers/Login');
Router_Login.get('/', View_Login);
Router_Login.post('/Add_Login', Check_Login);
module.exports = Router_Login;
