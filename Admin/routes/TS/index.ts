let express_Login = require('express');
let router = express_Login.Router();
let Loadding = require ('../Controllers/Login');    


router.get('/' ,Loadding.Views );
router.post ('/Login' ,Loadding.Loadding_Login);
router.post ('/AddToken' ,Loadding.Save_Token);
router.post ('/CheckToken' , Loadding.CheckToken);
module.exports = router;     