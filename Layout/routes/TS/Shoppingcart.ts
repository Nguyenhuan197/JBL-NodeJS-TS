let express_Shopping_Cart = require('express');
let Router_Shopping_Cart = express_Shopping_Cart.Router();
let View_Shopping_Cart  = require('../Controllers/ShoppingCart');

Router_Shopping_Cart.get ('/', View_Shopping_Cart.Views);
Router_Shopping_Cart.post ('/Add_Pay' , View_Shopping_Cart.Add);
module.exports = Router_Shopping_Cart;            