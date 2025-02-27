"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_Login = exports.View_Login = void 0;
const Login_1 = __importDefault(require("../Model/Login"));
const View_Login = (req, res, next) => {
    res.render('Login', {});
};
exports.View_Login = View_Login;
const Check_Login = (req, res, next) => {
    let Email = req.body.Email;
    let Password = req.body.Password;
    const SQL_Login = new Login_1.default();
    SQL_Login.Login(Email, Password, (error, Result) => {
        if (error) {
            return next(error);
        }
        else {
            if (Result.length >= 1) {
                let ID_USER = Result[0]['ID_USER'];
                res.cookie('USER_TRUE', ID_USER, { maxAge: 6000000, path: '/' });
                res.send('Thanhcong');
            }
            else {
                res.send('Thatbai');
            }
        }
    });
};
exports.Check_Login = Check_Login;
