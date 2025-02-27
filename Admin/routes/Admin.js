"use strict";
let express_Admin = require('express');
let router_Admin = express_Admin.Router();
let Loadding_Admin = require('../Controllers/Admin');
router_Admin.get('/', Loadding_Admin.Views);
module.exports = router_Admin;
