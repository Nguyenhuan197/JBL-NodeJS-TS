"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fill_Product = exports.Loadding_API = exports.Loadding_API_Category = exports.View_Category = void 0;
const Category_1 = __importDefault(require("../Model/Category"));
const Home_1 = __importDefault(require("../Model/Home"));
let SQL = new Category_1.default();
let SQL_Menu = new Home_1.default();
const View_Category = (req, res, next) => {
    res.render('Category', {});
};
exports.View_Category = View_Category;
const Loadding_API_Category = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let Data_Header = {};
        Data_Header.Loanghenhac = yield new Promise((resolve, reject) => {
            SQL_Menu.Category_Loanghenhac((error, Result) => {
                if (error)
                    reject(error);
                else
                    resolve(Result);
            });
        });
        Data_Header.Tainghe = yield new Promise((resolve, reject) => {
            SQL_Menu.Category_Tainghe((error, Result) => {
                if (error)
                    reject(error);
                else
                    resolve(Result);
            });
        });
        Data_Header.Amthanhgiadinh = yield new Promise((resolve, reject) => {
            SQL_Menu.Category_Amthanhgiadinh((error, Result) => {
                if (error)
                    reject(error);
                else
                    resolve(Result);
            });
        });
        Data_Header.Sanphamgaming = yield new Promise((resolve, reject) => {
            SQL_Menu.Category_Sanphamgaming((error, Result) => {
                if (error)
                    reject(error);
                else
                    resolve(Result);
            });
        });
        Data_Header.Amthanhchuyennghiep = yield new Promise((resolve, reject) => {
            SQL_Menu.Categotry_Amthanhchuyennghiep((error, Result) => {
                if (error)
                    reject(error);
                else
                    resolve(Result);
            });
        });
        res.status(200).json({ Data_Header });
    }
    catch (error) {
        return next(error);
    }
});
exports.Loadding_API_Category = Loadding_API_Category;
const Loadding_API = (req, res, next) => {
    let ID_CATEGORY = req.params.ID_Action;
    SQL.Loading_Category(ID_CATEGORY, (error, Results) => {
        if (!error) {
            res.status(200).json({ Data_Category: Results });
        }
        else {
            return next(error);
        }
    });
};
exports.Loadding_API = Loadding_API;
const Fill_Product = (req, res, next) => {
    const Min_Price = req.params.MIN;
    const Max_Price = req.params.MAX;
    SQL.Loading_Fill_Category(Min_Price, Max_Price, (error, Results) => {
        if (!error) {
            res.status(200).json({ Data_Category: Results });
            // res.render ('Category' , {});
        }
        else {
            return next(error);
        }
    });
};
exports.Fill_Product = Fill_Product;
