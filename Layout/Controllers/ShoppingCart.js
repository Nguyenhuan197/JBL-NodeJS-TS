"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Add = exports.Views = void 0;
const express_1 = __importDefault(require("express"));
const ShoppingCart_1 = __importDefault(require("../Model/ShoppingCart"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
let Connect_Data = new ShoppingCart_1.default();
const Views = (req, res, next) => {
    res.render('Shoppingcart', {});
};
exports.Views = Views;
const Add = (req, res, next) => {
    let SQL = req.body.Data_Pay;
    let Cookia = req.body.Cookia;
    console.log(JSON.stringify(SQL, null, 2));
    Connect_Data.Add(SQL, Cookia, (error, result) => {
        if (error)
            return next(error);
        res.send('Thêm Thành Công nha');
    });
};
exports.Add = Add;
