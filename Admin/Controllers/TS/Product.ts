import fs from "fs";
import path from "path";
import { Request, Response, NextFunction } from "express";
import multer from "multer";
import Product_Model from "../Model/Product";
import { error } from "console";
const SQL = new Product_Model();


// Phần Upload IMG
const uploadDir = path.join(__dirname, "../../Upload/Product/");
// ✅ Kiểm tra và tạo thư mục nếu chưa có
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// ✅ Cấu hình lưu ảnh với multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    },
});




// ✅ Middleware upload ảnh
export const uploadMiddleware = multer({ storage }).single("image");

// ✅ Controller hiển thị trang sản phẩm
export const Views = (req: Request, res: Response) => {
    res.render("Product", {});
};

// ✅ API lấy danh sách sản phẩm
export const View_API = (req: Request, res: Response, next: NextFunction) => {
    SQL.View_Data_Product((error: string, result: any) => {
        if (error) return next(error);
        res.status(200).json({ Data_Product: result });
    });
};


// ✅ Xóa sản phẩm
export const Delete = (req: Request, res: Response, next: NextFunction) => {
    const ID_DELETE = parseInt(req.params.ID);

    if (isNaN(ID_DELETE)) {
        return res.status(400).json({ error: "ID không hợp lệ!" });
    }

    SQL.Delete(ID_DELETE, (error: string, result: string[]) => {
        if (error) return next(error);

        if (result.length > 0) {
            result.forEach((fileName) => {
                const filePath = path.join(uploadDir, fileName);

                fs.access(filePath, fs.constants.F_OK, (err) => {
                    if (!err) {
                        fs.unlink(filePath, (unlinkErr) => {
                            if (unlinkErr) {
                                console.error(`❌ Lỗi khi xóa ảnh: ${filePath}`, unlinkErr);
                            } else {
                                console.log(`✅ Đã xóa ảnh: ${filePath}`);
                            }
                        });
                    } else {
                        console.log(`⚠️ File không tồn tại: ${filePath}`);
                    }
                });
            });
        }

        res.json({ message: "Xóa thành công!" });
    });
};



export const Upload = (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
        return res.status(400).json({ error: "Không có file nào được tải lên!" });
    }

    let ID : number = req.body.ID;
    let Name: string = req.body.Name;  
    let Price: number = req.body.Price; 
    let filePath : string = `../Upload/Product/${req.file.filename}`; 


    SQL.Upload (ID , Name , Price , filePath , (error: string, result: string[]) => {
        if (error) return next (error)
        res.send ('Cập Nhật Thành Công');    
    });
};



export const ADD = (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
        return res.status(400).json({ error: "Không có file nào được tải lên!" });
    }

    let Name: string = req.body.Name;  
    let Price: number = req.body.Price; 
    let filePath : string = `../Upload/Product/${req.file.filename}`; 
    let Category : number = req.body.Category;

    SQL.ADD (Name , Price , filePath , Category , (error: string, result: string[]) => {
        if (error) return next (error)
        res.send ('Cập Nhật Thành Công');    
    });
};



export const Pheduyetsanpham = (req: Request, res: Response, next: NextFunction) => {
    let ID_Upload_Static_Product : number = req.body.Status_Product;
    let Value_Status_Product : number = req.body.ID_Edit_Status;

    SQL.Pheduyetsanpham (ID_Upload_Static_Product , Value_Status_Product , (error: string, result: string[]) => {
        if (error) return next (error)
        res.send ('Câp Nhật Trạng Thái Thành Công');    
    });

};



// Test API NODE JS
export const Top10_Hot_Product = (req : Request, res: Response, next: NextFunction) => {
    SQL.Top10_Hot_Product ((error: string, result: string[]) => {
        if (error) return next (error)
        res.status(200).json({result });
    });
}


export const Page_Category = (req : Request, res: Response, next: NextFunction) => {
    let ID_Category = req.params.ID_Page;

    SQL.Page_Category (ID_Category , (error: string, result: string[]) => {
        if (error) return next (error)
        res.status(200).json({result });
    });
}   


// giảm dan
export const Ascending_Order_Product = (req : Request, res: Response, next: NextFunction) => {
    SQL.Ascending_Order_Product ((error: string, result: string[]) => {
        if (error) return next (error)
        res.status(200).json({result });
    });
}   


// Tang dần
export const Descending_Order_Product = (req : Request, res: Response, next: NextFunction) => {
    SQL.Descending_Order_Product ((error: string, result: string[]) => {
        if (error) return next (error)
        res.status(200).json({result });
    });
}   


// sản phẩm đã duyêt
export const Status_Product_True = (req : Request, res: Response, next: NextFunction) => {
    SQL.Status_Product_True ((error: string, result: string[]) => {
        if (error) return next (error)
        res.status(200).json({result });
    });
}   


export const Status_Product_Fall = (req : Request, res: Response, next: NextFunction) => {
    SQL.Status_Product_Fall ((error: string, result: string[]) => {
        if (error) return next (error)
        res.status(200).json({result });
    });
}   

// Search_Product
export const Search_Product  = (req : Request, res: Response, next: NextFunction) => {
    let CHECK_KEY_SEARCH : any = req.params.KEY;

    SQL.Search_Product (CHECK_KEY_SEARCH ,(error: string, result: string[]) => {
        if (error) return next (error)
        res.status(200).json({result });
    });
}   


// Trạng thái đơn hàng
export const Trangthaidonhang = (req : Request, res: Response, next: NextFunction) => {
    let Trangthaidonhang : any = req.params.Status;

    SQL.Trangthaidonhang (Trangthaidonhang ,(error: string, result: string[]) => {
        if (error) return next (error)
        res.status(200).json({result });
    });
}   


// Thông tin đơn hàng 
export const Thongtindonhang = (req : Request, res: Response, next: NextFunction) => {
    SQL.Thongtindonhang ((error: string, result: string[]) => {
        if (error) return next (error)
        res.status(200).json({result });
    });
}  


