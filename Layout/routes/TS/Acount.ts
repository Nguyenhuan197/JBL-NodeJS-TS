let express_Acount = require('express');
let Router_Acount = express_Acount.Router();
let View_Acount = require('../Controllers/Acount');

Router_Acount.get ('/', View_Acount.Views);
Router_Acount.get ('/API', View_Acount.Loadding_API);
Router_Acount.post ('/Upload' ,View_Acount.Upload);
module.exports = Router_Acount;

          