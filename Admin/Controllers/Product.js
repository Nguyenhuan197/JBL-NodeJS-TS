"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thongtindonhang = exports.Trangthaidonhang = exports.Search_Product = exports.Status_Product_Fall = exports.Status_Product_True = exports.Descending_Order_Product = exports.Ascending_Order_Product = exports.Page_Category = exports.Top10_Hot_Product = exports.Pheduyetsanpham = exports.ADD = exports.Upload = exports.Delete = exports.View_API = exports.Views = exports.uploadMiddleware = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const Product_1 = __importDefault(require("../Model/Product"));
const SQL = new Product_1.default();
// Phần Upload IMG
const uploadDir = path_1.default.join(__dirname, "../../Upload/Product/");
// ✅ Kiểm tra và tạo thư mục nếu chưa có
if (!fs_1.default.existsSync(uploadDir)) {
    fs_1.default.mkdirSync(uploadDir, { recursive: true });
}
// ✅ Cấu hình lưu ảnh với multer
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${path_1.default.extname(file.originalname)}`);
    },
});
// ✅ Middleware upload ảnh
exports.uploadMiddleware = (0, multer_1.default)({ storage }).single("image");
// ✅ Controller hiển thị trang sản phẩm
const Views = (req, res) => {
    res.render("Product", {});
};
exports.Views = Views;
// ✅ API lấy danh sách sản phẩm
const View_API = (req, res, next) => {
    SQL.View_Data_Product((error, result) => {
        if (error)
            return next(error);
        res.status(200).json({ Data_Product: result });
    });
};
exports.View_API = View_API;
// ✅ Xóa sản phẩm
const Delete = (req, res, next) => {
    const ID_DELETE = parseInt(req.params.ID);
    if (isNaN(ID_DELETE)) {
        return res.status(400).json({ error: "ID không hợp lệ!" });
    }
    SQL.Delete(ID_DELETE, (error, result) => {
        if (error)
            return next(error);
        if (result.length > 0) {
            result.forEach((fileName) => {
                const filePath = path_1.default.join(uploadDir, fileName);
                fs_1.default.access(filePath, fs_1.default.constants.F_OK, (err) => {
                    if (!err) {
                        fs_1.default.unlink(filePath, (unlinkErr) => {
                            if (unlinkErr) {
                                console.error(`❌ Lỗi khi xóa ảnh: ${filePath}`, unlinkErr);
                            }
                            else {
                                console.log(`✅ Đã xóa ảnh: ${filePath}`);
                            }
                        });
                    }
                    else {
                        console.log(`⚠️ File không tồn tại: ${filePath}`);
                    }
                });
            });
        }
        res.json({ message: "Xóa thành công!" });
    });
};
exports.Delete = Delete;
const Upload = (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({ error: "Không có file nào được tải lên!" });
    }
    let ID = req.body.ID;
    let Name = req.body.Name;
    let Price = req.body.Price;
    let filePath = `../Upload/Product/${req.file.filename}`;
    SQL.Upload(ID, Name, Price, filePath, (error, result) => {
        if (error)
            return next(error);
        res.send('Cập Nhật Thành Công');
    });
};
exports.Upload = Upload;
const ADD = (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({ error: "Không có file nào được tải lên!" });
    }
    let Name = req.body.Name;
    let Price = req.body.Price;
    let filePath = `../Upload/Product/${req.file.filename}`;
    let Category = req.body.Category;
    SQL.ADD(Name, Price, filePath, Category, (error, result) => {
        if (error)
            return next(error);
        res.send('Cập Nhật Thành Công');
    });
};
exports.ADD = ADD;
const Pheduyetsanpham = (req, res, next) => {
    let ID_Upload_Static_Product = req.body.Status_Product;
    let Value_Status_Product = req.body.ID_Edit_Status;
    SQL.Pheduyetsanpham(ID_Upload_Static_Product, Value_Status_Product, (error, result) => {
        if (error)
            return next(error);
        res.send('Câp Nhật Trạng Thái Thành Công');
    });
};
exports.Pheduyetsanpham = Pheduyetsanpham;
// Test API NODE JS
const Top10_Hot_Product = (req, res, next) => {
    SQL.Top10_Hot_Product((error, result) => {
        if (error)
            return next(error);
        res.status(200).json({ result });
    });
};
exports.Top10_Hot_Product = Top10_Hot_Product;
const Page_Category = (req, res, next) => {
    let ID_Category = req.params.ID_Page;
    SQL.Page_Category(ID_Category, (error, result) => {
        if (error)
            return next(error);
        res.status(200).json({ result });
    });
};
exports.Page_Category = Page_Category;
// giảm dan
const Ascending_Order_Product = (req, res, next) => {
    SQL.Ascending_Order_Product((error, result) => {
        if (error)
            return next(error);
        res.status(200).json({ result });
    });
};
exports.Ascending_Order_Product = Ascending_Order_Product;
// Tang dần
const Descending_Order_Product = (req, res, next) => {
    SQL.Descending_Order_Product((error, result) => {
        if (error)
            return next(error);
        res.status(200).json({ result });
    });
};
exports.Descending_Order_Product = Descending_Order_Product;
// sản phẩm đã duyêt
const Status_Product_True = (req, res, next) => {
    SQL.Status_Product_True((error, result) => {
        if (error)
            return next(error);
        res.status(200).json({ result });
    });
};
exports.Status_Product_True = Status_Product_True;
const Status_Product_Fall = (req, res, next) => {
    SQL.Status_Product_Fall((error, result) => {
        if (error)
            return next(error);
        res.status(200).json({ result });
    });
};
exports.Status_Product_Fall = Status_Product_Fall;
// Search_Product
const Search_Product = (req, res, next) => {
    let CHECK_KEY_SEARCH = req.params.KEY;
    SQL.Search_Product(CHECK_KEY_SEARCH, (error, result) => {
        if (error)
            return next(error);
        res.status(200).json({ result });
    });
};
exports.Search_Product = Search_Product;
// Trạng thái đơn hàng
const Trangthaidonhang = (req, res, next) => {
    let Trangthaidonhang = req.params.Status;
    SQL.Trangthaidonhang(Trangthaidonhang, (error, result) => {
        if (error)
            return next(error);
        res.status(200).json({ result });
    });
};
exports.Trangthaidonhang = Trangthaidonhang;
// Thông tin đơn hàng 
const Thongtindonhang = (req, res, next) => {
    SQL.Thongtindonhang((error, result) => {
        if (error)
            return next(error);
        res.status(200).json({ result });
    });
};
exports.Thongtindonhang = Thongtindonhang;
