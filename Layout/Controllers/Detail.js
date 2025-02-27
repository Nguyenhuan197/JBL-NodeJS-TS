"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.View_Detail_API = exports.View_Detail = void 0;
// import { error } from 'console';
const Detail_1 = __importDefault(require("../Model/Detail"));
const View_Detail = (req, res, next) => {
    res.render('Detail', {});
};
exports.View_Detail = View_Detail;
const View_Detail_API = (req, res, next) => {
    const ID = req.params.ID;
    const SQL = new Detail_1.default(ID);
    const Data_Detail = {};
    SQL.Load_Views((error, Result) => {
        if (error)
            return next(error);
        Data_Detail.Show_Information = Result;
        SQL.Load_IMG((error, Result) => {
            if (error)
                return next(error);
            Data_Detail.Show_IMG = Result;
        });
        SQL.Load_Product_Sell_More(ID, (error, Result) => {
            if (error)
                return next(error);
            Data_Detail.Data_Product_Sell_More = Result;
            res.status(200).json({
                Data_JSON: Data_Detail
            });
        });
    });
};
exports.View_Detail_API = View_Detail_API;
