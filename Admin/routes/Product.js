"use strict";
let express_Product = require('express');
let router_Product = express_Product.Router();
let Loadding_Product = require('../Controllers/Product');
router_Product.get('/', Loadding_Product.Views);
router_Product.get('/API', Loadding_Product.View_API);
router_Product.delete('/:ID', Loadding_Product.Delete);
router_Product.post("/Upload", Loadding_Product.uploadMiddleware, Loadding_Product.Upload);
router_Product.post("/Add", Loadding_Product.uploadMiddleware, Loadding_Product.ADD);
router_Product.post("/EDIT_Quen", Loadding_Product.Pheduyetsanpham);
// Trạng thái đơn hàng Node JS
router_Product.get("/Trangthaidonhang/:Status", Loadding_Product.Trangthaidonhang);
// Test API NODE JS 
router_Product.get("/Top10_Hot_Product", Loadding_Product.Top10_Hot_Product);
router_Product.get("/Page_Category/:ID_Page", Loadding_Product.Page_Category);
router_Product.get("/Ascending_Order_Product", Loadding_Product.Ascending_Order_Product);
router_Product.get("/Descending_Order_Product", Loadding_Product.Descending_Order_Product);
router_Product.get("/Status_Product_True", Loadding_Product.Status_Product_True);
router_Product.get("/Status_Product_Fall", Loadding_Product.Status_Product_Fall);
router_Product.get("/Search_Product/:KEY", Loadding_Product.Search_Product);
router_Product.get("/Thongtindonhang", Loadding_Product.Thongtindonhang);
module.exports = router_Product;
