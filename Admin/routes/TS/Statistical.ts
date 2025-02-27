let express_Statistical  = require('express');
let router_Statistical = express_Statistical.Router();
let Loadding_Statistical  = require ('../Controllers/Statistical');    

router_Statistical.get('/', Loadding_Statistical.Views);
module.exports = router_Statistical;
    

