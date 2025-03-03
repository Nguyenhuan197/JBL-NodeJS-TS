let express = require('express');
let Router_Detail = express.Router();
let OB = require('../Controllers/Detail');

Router_Detail.get('/:ID', OB.View_Detail); 
Router_Detail.get('/API/:ID', OB.View_Detail_API);
module.exports = Router_Detail;      