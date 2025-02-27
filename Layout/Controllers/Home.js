"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loadding_API = exports.Views = void 0;
const Home_1 = __importDefault(require("../Model/Home")); // Inpost Class Home bên kia - Model
let SQL = new Home_1.default();
// View route handler
const Views = (req, res, next) => {
    res.render('Home', {});
};
exports.Views = Views;
// API route handler
const Loadding_API = (req, res, next) => {
    let Data_Home = {};
    let Data_Header = {};
    SQL.Category_Loanghenhac((error, Result) => {
        if (!error) {
            Data_Header.Loanghenhac = Result;
        }
        else {
            return next(error);
        }
    });
    SQL.Category_Tainghe((error, Result) => {
        if (!error) {
            Data_Header.Tainghe = Result;
        }
        else {
            return next(error);
        }
    });
    SQL.Category_Amthanhgiadinh((error, Results) => {
        if (!error) {
            Data_Header.Amthanhgiadinh = Results;
        }
        else {
            return next(error);
        }
    });
    SQL.Category_Sanphamgaming((error, Result) => {
        if (!error) {
            Data_Header.Sanphamgaming = Result;
        }
        else {
            return next(error);
        }
    });
    SQL.Categotry_Amthanhchuyennghiep((error, Result) => {
        if (!error) {
            Data_Header.Amthanhchuyennghiep = Result;
        }
        else {
            return next(error);
        }
    });
    // Data - Main
    SQL.Sale_Price((error, Result) => {
        if (!error) {
            Data_Home.Data_Sale = Result;
        }
        else {
            return next(error);
        }
    });
    SQL.TopSP_Banchay_Loa((error, Result) => {
        if (error)
            return next(error);
        Data_Home.HOT_Product_Loa = Result;
    });
    SQL.TopSP_Banchay_Tainghe((error, Result) => {
        if (error)
            return next(error);
        Data_Home.HOT_Product_Tainghe = Result;
    });
    SQL.TopSP_Banchay_Gamming((error, Result) => {
        if (error)
            return next(error);
        Data_Home.HOT_Product_Gamming = Result;
    });
    SQL.Loadding_Loa((error, Result) => {
        if (!error) {
            Data_Home.Data_Loa = Result;
        }
        else {
            return next(error);
        }
    });
    SQL.Loadding_Tainghe((error, Result) => {
        if (!error) {
            Data_Home.Data_Tainghe = Result;
        }
        else {
            return next(error);
        }
    });
    SQL.Loadding_Gamming((error, Result) => {
        if (!error) {
            Data_Home.Data_Gamming = Result;
        }
        else {
            return next(error);
        }
    });
    SQL.Loadding_Loagiadinh((error, Result) => {
        if (!error) {
            Data_Home.Data_Loagiadinh = Result;
        }
        else {
            return next(error);
        }
    });
    SQL.Loadding_Youtube((error, Result) => {
        if (error)
            return next(error);
        Data_Home.Youtobe = Result;
        res.status(200).json({
            SQL_Header: Data_Header,
            SQL_Body: Data_Home
        });
    });
};
exports.Loadding_API = Loadding_API;
