"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loading_Header = void 0;
const Header_True_1 = __importDefault(require("../Model/Header_True"));
let SQL = new Header_True_1.default();
const Loading_Header = (res, req, next) => {
    let Data_Headerr = {};
    SQL.Category_Loanghenhac((error, Result) => {
        if (!error) {
            // Data_Headerr.Category_Loa = Result;
            // res.render ('Home' , {SQL : Result });
            res.json(Result);
        }
        else {
            return next(error);
        }
    });
};
exports.Loading_Header = Loading_Header;
