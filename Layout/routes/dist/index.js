"use strict";
const express = require('express');
const router = express.Router();
const Loadding = require('../Controllers/Home');
router.get('/', Loadding.Views);
router.get('/API', Loadding.Loadding_API);
module.exports = router;
