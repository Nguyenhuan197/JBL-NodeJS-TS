"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete_Power = exports.Upload_Power = exports.View_API = exports.Views = void 0;
const User_1 = __importDefault(require("../Model/User"));
let SQL = new User_1.default();
// View route handler
const Views = (req, res, next) => {
    res.render('User', {});
};
exports.Views = Views;
const View_API = (req, res, next) => {
    SQL.View_API((error, Result) => {
        if (error)
            return next(error);
        res.status(200).json(Result);
    });
};
exports.View_API = View_API;
const Upload_Power = (req, res, next) => {
    let Power_Edit = req.body.Upload_Power;
    let ID_EDIT = req.body.ID_Edit;
    SQL.Upload_Power(Power_Edit, ID_EDIT, (error, Result) => {
        if (error)
            return next(error);
        res.send('Thành Công');
    });
};
exports.Upload_Power = Upload_Power;
const Delete_Power = (req, res, next) => {
    let ID_Delete_Power = req.params.Delete_Power;
    SQL.Delete_Power(ID_Delete_Power, (error, Result) => {
        if (error)
            return next(error);
        res.send('Xóa Thành Công');
    });
};
exports.Delete_Power = Delete_Power;
