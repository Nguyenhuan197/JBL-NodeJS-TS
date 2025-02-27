"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login_Rigister = exports.View_Rigister_Router = void 0;
const Rigister_1 = __importDefault(require("../Model/Rigister"));
const View_Rigister_Router = (req, res, next) => {
    res.render('Register', {});
};
exports.View_Rigister_Router = View_Rigister_Router;
const Login_Rigister = (req, res, next) => {
    const SQL_Register = new Rigister_1.default();
    let Name = req.body.Name_Register;
    let Email = req.body.Email_Register;
    let Password = req.body.Password_Register;
    SQL_Register.Save_Register(Name, Email, Password, (error, Result) => {
        if (error) {
            return next(error);
        }
        else {
            SQL_Register.Check_Register(Email, Password, (error, result) => {
                if (error) {
                    return next(error);
                }
                else {
                    let ID_USER = result[0]['ID_USER'];
                    res.cookie('USER_TRUE', ID_USER, { maxAge: 6000000, path: '/' });
                    res.send('Thành Công');
                }
            });
        }
    });
};
exports.Login_Rigister = Login_Rigister;
