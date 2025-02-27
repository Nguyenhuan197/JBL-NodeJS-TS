"use strict";
let express_Category = require('express');
let Router = express_Category.Router();
let API = require('../Controllers/Category');
Router.get('/API_Category', API.Loadding_API_Category);
Router.get('/API/:ID_Action', API.Loadding_API);
Router.get('/:ID_Action', API.View_Category);
Router.get('/API_Fill/:MIN/:MAX', API.Fill_Product);
module.exports = Router;
