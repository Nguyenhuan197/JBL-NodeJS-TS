const express_Rigister = require('express');
const Router_Rigister = express_Rigister.Router();
const { 
    View_Rigister_Router, 
    Login_Rigister    
} = require ('../Controllers/Rigister');

   
Router_Rigister.get('/', View_Rigister_Router);
Router_Rigister.post('/ADD_Form_Register', Login_Rigister);
module.exports = Router_Rigister;