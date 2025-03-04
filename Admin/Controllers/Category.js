"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload = exports.Delete = exports.Add = exports.Data_Category = exports.View_Category = exports.Views = void 0;
const Category_1 = __importDefault(require("../Model/Category"));
let SQL = new Category_1.default();
// View route handler
const Views = (req, res, next) => {
    res.render('Category', {});
};
exports.Views = Views;
const View_Category = (req, res, next) => {
    SQL.Views((error, Result) => {
        if (error)
            return next(error);
        res.status(200).json(Result);
    });
};
exports.View_Category = View_Category;
const Data_Category = (req, res, next) => {
    SQL.View_Select_Category((error, Result) => {
        if (error)
            return next(error);
        res.status(200).json(Result);
    });
};
exports.Data_Category = Data_Category;
const Add = (req, res, next) => {
    let ID = req.body.ID_Category;
    let Name_Category = req.body.Name_Category;
    SQL.Add_News(ID, Name_Category, (error, Result) => {
        if (error)
            return next(error);
        res.send('Thêm Danh Mục Thành Công');
    });
};
exports.Add = Add;
const Delete = (req, res, next) => {
    let ID = parseInt(req.params.ID);
    SQL.Delete(ID, (error, Result) => {
        if (error)
            return next(error);
        res.send('Xóa Danh Mục Thành Công');
    });
};
exports.Delete = Delete;
const Upload = (req, res, next) => {
    let ID_EDIT = Number(req.params.IDUPLOAD);
    let Name_Category = req.body.Name_Category;
    let ID_Category = req.body.ID_Category;
    SQL.Upload(ID_EDIT, ID_Category, Name_Category, (error, Result) => {
        if (error)
            return next(error);
        res.send('Cập Nhật Danh Mục Thành Công');
    });
};
exports.Upload = Upload;
