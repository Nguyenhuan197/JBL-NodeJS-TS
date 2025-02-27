"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload = exports.Views_API = exports.Views = void 0;
const Inpomation_1 = __importDefault(require("../Model/Inpomation"));
let SQL = new Inpomation_1.default();
// View route handler
const Views = (req, res, next) => {
    res.render('Inpomation', {});
};
exports.Views = Views;
const Views_API = (req, res, next) => {
    SQL.View_Data_Order((error, Result) => {
        if (error)
            return next(error);
        res.status(200).json({ Result });
    });
};
exports.Views_API = Views_API;
const Upload = (req, res, next) => {
    let ID_Upload = req.body.ID_FORM;
    let Trangthai = req.body.Trangthai;
    SQL.Upload(ID_Upload, Trangthai, (error, Result) => {
        if (error)
            return next(error);
        res.send("Cập Nhật Thành Công");
    });
};
exports.Upload = Upload;
