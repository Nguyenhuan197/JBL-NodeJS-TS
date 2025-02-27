let express_Home = require('express');
let router = express_Home.Router();
let Loadding = require ('../Controllers/Home');    

router.get('/', Loadding.Views );
router.get ('/API', Loadding.Loadding_API);
module.exports = router;          