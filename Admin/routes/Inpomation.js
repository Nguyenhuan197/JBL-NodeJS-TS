"use strict";
let express_Inpomation = require('express');
let router_Inpomation = express_Inpomation.Router();
let Loadding_Inpomation = require('../Controllers/Inpomation');
router_Inpomation.get('/', Loadding_Inpomation.Views);
router_Inpomation.get('/Views_API', Loadding_Inpomation.Views_API);
router_Inpomation.post('/Upload', Loadding_Inpomation.Upload);
module.exports = router_Inpomation;
