"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loadding_Login = exports.Views = void 0;
const Login_1 = __importDefault(require("../Model/Login"));
let SQL = new Login_1.default();
// View route handler
const Views = (req, res, next) => {
    res.render('Login', {});
};
exports.Views = Views;
const Loadding_Login = (req, res, next) => {
    let Name_Login = req.body.Email_Login;
    let Email_Login = req.body.Password_Login;
    SQL.Login(Name_Login, Email_Login, (error, Result) => {
        if (error) {
            return next(error);
        }
        else {
            if (Result.length == 1) {
                res.send('True');
            }
            else {
                res.send('False');
            }
        }
    });
};
exports.Loadding_Login = Loadding_Login;
