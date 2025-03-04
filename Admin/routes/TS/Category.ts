let express_Category  = require('express');
let router_Category = express_Category.Router();
let Loadding_Category  = require ('../Controllers/Category');    

router_Category.get ('/', Loadding_Category.Views);
router_Category.get ('/API_Views' , Loadding_Category.View_Category);
router_Category.get ('/API_Category' , Loadding_Category.Data_Category);
router_Category.post ('/Add' , Loadding_Category.Add);
router_Category.delete ('/:ID' , Loadding_Category.Delete);
router_Category.put ('/Upload/:IDUPLOAD' ,Loadding_Category.Upload);
module.exports = router_Category;     