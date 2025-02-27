let express_User  = require('express');
let router_User = express_User.Router();
let Loadding_User  = require ('../Controllers/User');    
router_User.get ('/', Loadding_User.Views);       
router_User.get ('/API' , Loadding_User.View_API);
router_User.post ('/EDIT_Power', Loadding_User.Upload_Power);
router_User.delete ('/:Delete_Power', Loadding_User.Delete_Power);
    
module.exports = router_User;