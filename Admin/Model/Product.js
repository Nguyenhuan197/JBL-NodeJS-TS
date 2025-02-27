"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Db_1 = __importDefault(require("../SQL/Db"));
class Product_Model {
    constructor() {
        this.View_Data_Product = (Callback) => {
            let Query_API_Product = `WITH RankedImages AS (
                SELECT 
                    sanpham.Tranthai AS Trangthaisp,
                    sanpham.id AS ID,
                    sanpham.Tensp AS Name,
                    sanpham.Giaban AS Price,
                    loaidanhmuc.Tendm AS Category,
                    anhsp.IMG AS IMG,
                    ROW_NUMBER() OVER (PARTITION BY sanpham.id ORDER BY anhsp.id) AS rn
                FROM sanpham
                LEFT JOIN loaidanhmuc 
                    ON sanpham.id_loaidm = loaidanhmuc.id
                LEFT JOIN anhsp 
                    ON sanpham.id = anhsp.idsp
            )
            SELECT 
                ID,
                Name,
                Price,
                Category,
                IMG,
                Trangthaisp  -- Bao gồm cột Trangthaisp trong truy vấn cuối cùng
            FROM RankedImages
            WHERE rn = 1;

        `;
            Db_1.default.query(Query_API_Product, (error, Result) => {
                if (error) {
                    Callback(error, null);
                }
                else {
                    Callback(null, Result);
                }
            });
        };
        this.Delete = (ID, Callback) => {
            let Query_Select_IMG = `SELECT anhsp.IMG FROM anhsp WHERE anhsp.idsp = ?`;
            let Query_Delete_IMG_Product = `DELETE FROM anhsp WHERE anhsp.idsp = ?`;
            let Query_Delete_Product = `DELETE FROM sanpham WHERE sanpham.id = ?`;
            // Lấy IMG
            Db_1.default.query(Query_Select_IMG, [ID], (error, result_IMG) => {
                if (error) {
                    return Callback(error);
                }
                else {
                    // Chuyển danh sách ảnh từ object thành mảng chuỗi ảnh
                    let IMG = result_IMG.map((row) => row.IMG) || [];
                    // Xóa IMG
                    Db_1.default.query(Query_Delete_IMG_Product, [ID], (error, result1) => {
                        if (error)
                            return Callback(error);
                        // Xoa Product
                        Db_1.default.query(Query_Delete_Product, [ID], (error, result2) => {
                            if (error)
                                return Callback(error);
                            Callback(null, IMG);
                        });
                    });
                }
            });
        };
        this.Pheduyetsanpham = (ID_Upload_Static_Product, Value_Status_Product, Callback) => {
            let QUERY_Upload_Static_Product = ` 
               UPDATE sanpham SET	
	            sanpham.Tranthai = ?
    	        WHERE sanpham.id = ?
        `;
            Db_1.default.query(QUERY_Upload_Static_Product, [ID_Upload_Static_Product, Value_Status_Product], (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
        // Test API NODE JS
        this.Top10_Hot_Product = (Callback) => {
            let QUERY_TOP10_PRODUCT = `
              SELECT sanpham.id AS ID ,
            sanpham.Tensp AS Name,
            MIN(anhsp.IMG) AS IMG,
            sanpham.Luotban AS Luotban
            
            FROM sanpham
                LEFT JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                LEFT JOIN loaidanhmuc
                    ON sanpham.id_loaidm = loaidanhmuc.id
                LEFT JOIN danhmuc
                    ON loaidanhmuc.iddm = danhmuc.id
                
                GROUP BY sanpham.id
               	   ORDER BY sanpham.Luotban DESC
            LIMIT 10
        `;
            Db_1.default.query(QUERY_TOP10_PRODUCT, (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
        // Page_Category
        this.Page_Category = (ID_Category, Callback) => {
            let Page_Category = `
              SELECT sanpham.id AS ID,
                sanpham.Tensp AS Name,
                sanpham.Luotban AS Luotban, 
                sanpham.Giaban AS Price,
                MIN(anhsp.IMG) AS IMG
                
                FROM sanpham
                    
                LEFT JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                LEFT JOIN loaidanhmuc
                    ON sanpham.id_loaidm = loaidanhmuc.id
                    
                    WHERE loaidanhmuc.id = ?
                    GROUP BY sanpham.id
                    LIMIT 20
        `;
            Db_1.default.query(Page_Category, [ID_Category], (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
        // Sap xep giảm dan 
        this.Ascending_Order_Product = (Callback) => {
            let Ascending_Order_Product = `
            SELECT sanpham.id AS ID,
            sanpham.Tensp AS Name,
            sanpham.Luotban AS Luotban, 
            sanpham.Giaban AS Price,
            MIN(anhsp.IMG) AS IMG
            
            FROM sanpham
                
            LEFT JOIN anhsp
                ON sanpham.id = anhsp.idsp
            
                
            GROUP BY sanpham.id
            ORDER BY sanpham.Giaban DESC
                LIMIT 20
        `;
            Db_1.default.query(Ascending_Order_Product, (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
        // săp xep tang dan 
        this.Descending_Order_Product = (Callback) => {
            let Descending_Order_Product = `
            SELECT sanpham.id AS ID,
            sanpham.Tensp AS Name,
            sanpham.Luotban AS Luotban, 
            sanpham.Giaban AS Price,
            MIN(anhsp.IMG) AS IMG
            
            FROM sanpham
                
            LEFT JOIN anhsp
                ON sanpham.id = anhsp.idsp
            
                
            GROUP BY sanpham.id
            ORDER BY sanpham.Giaban ASC
                LIMIT 20
        `;
            Db_1.default.query(Descending_Order_Product, (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
        // Trạng thái sản phẩm đã duyêt 
        this.Status_Product_True = (Callback) => {
            let Status_Product_True = `
            SELECT sanpham.id AS ID,
            sanpham.Tensp AS Name,
            sanpham.Luotban AS Luotban, 
            sanpham.Giaban AS Price,
            MIN(anhsp.IMG) AS IMG
            
            FROM sanpham
            LEFT JOIN anhsp
                ON sanpham.id = anhsp.idsp
                WHERE sanpham.Tranthai = 2
                GROUP BY sanpham.id
                    LIMIT 30	
                   
        `;
            Db_1.default.query(Status_Product_True, (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
        // Trạng thái sản phẩm chưa duyêt 
        this.Status_Product_Fall = (Callback) => {
            let Status_Product_Fall = `
            SELECT sanpham.id AS ID,
            sanpham.Tensp AS Name,
            sanpham.Luotban AS Luotban, 
            sanpham.Giaban AS Price,
            MIN(anhsp.IMG) AS IMG
            
            FROM sanpham
            LEFT JOIN anhsp
                ON sanpham.id = anhsp.idsp
                WHERE sanpham.Tranthai = 1
                GROUP BY sanpham.id
                    LIMIT 30	
                   
        `;
            Db_1.default.query(Status_Product_Fall, (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
        // Tìm kiếm sản phẩm
        this.Search_Product = (KEY_SEARCH, Callback) => {
            let Status_Product_Fall = `
             SELECT sanpham.id AS ID,
                sanpham.Tensp AS Name,
                sanpham.Luotban AS Luotban, 
                sanpham.Giaban AS Price,
                MIN(anhsp.IMG) AS IMG
            
            FROM sanpham
            
            LEFT JOIN anhsp
                ON sanpham.id = anhsp.idsp
                WHERE LOWER(sanpham.Tensp) LIKE CONCAT('%', LOWER(?), '%')
                GROUP BY sanpham.id
                    LIMIT 30	
        `;
            Db_1.default.query(Status_Product_Fall, [KEY_SEARCH], (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
        // Trạng thái đơn hàng đã giao chưa giao 
        this.Trangthaidonhang = (Key_Status, Callback) => {
            let Trangthaidonhang = `
          SELECT  hoadon_c.id AS ID,
            hoadon_c.Tensp AS Name,
            hoadon_c.Time_ AS Time,
            sanpham.id AS ID_Donhang,    
            
            (SELECT nguoidung.Ten FROM nguoidung WHERE nguoidung.id = hoadon_c.ID_Khachhang ) AS Tenkhachhang,
            (SELECT nguoidung.Tinh_Thanhpho FROM nguoidung WHERE nguoidung.id = hoadon_c.ID_Khachhang) AS Diachikhachhang,
                
            hoadon_c.Soluong AS Count,
            hoadon_c.Tongtien AS Tongtien,
            hoadon_c.Trangthaidonhang AS Tinhtrang,
           	MIN(anhsp.IMG) AS IMG            
            FROM hoadon_c
            
            LEFT JOIN sanpham
                ON sanpham.id = hoadon_c.id_donhang
            LEFT JOIN anhsp
                ON sanpham.id = anhsp.idsp
                
                WHERE hoadon_c.Trangthaidonhang = ?
            GROUP BY hoadon_c.id
        `;
            Db_1.default.query(Trangthaidonhang, [Key_Status], (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
        // Thông tin đơn hàng 
        this.Thongtindonhang = (Callback) => {
            let Trangthaidonhang = `
          SELECT  hoadon_c.id AS ID,
            hoadon_c.Tensp AS Name,
            hoadon_c.Time_ AS Time,
            sanpham.id AS ID_Donhang,    
            
            (SELECT nguoidung.Ten FROM nguoidung WHERE nguoidung.id = hoadon_c.ID_Khachhang ) AS Tenkhachhang,
            (SELECT nguoidung.Tinh_Thanhpho FROM nguoidung WHERE nguoidung.id = hoadon_c.ID_Khachhang) AS Diachikhachhang,
                
            hoadon_c.Soluong AS Count,
            hoadon_c.Tongtien AS Tongtien,
            hoadon_c.Trangthaidonhang AS Tinhtrang,
           	MIN(anhsp.IMG) AS IMG            
            FROM hoadon_c
            
            LEFT JOIN sanpham
                ON sanpham.id = hoadon_c.id_donhang
            LEFT JOIN anhsp
                ON sanpham.id = anhsp.idsp
                
                WHERE hoadon_c.Trangthaidonhang = ?
            GROUP BY hoadon_c.id
        `;
            Db_1.default.query(Trangthaidonhang, (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
    }
    Upload(ID, Name, Price, filePath, Callback) {
        if (!ID || !filePath || !Name || isNaN(Price)) {
            return Callback("Dữ liệu không hợp lệ", null);
        }
        let Select_One_IMG = `SELECT MIN(id) AS min_id FROM anhsp WHERE idsp = ?`;
        let Query_IMG = `UPDATE anhsp SET IMG = ? WHERE id = ?`;
        let Query_Product = `UPDATE sanpham SET Tensp = ?, Giaban = ? WHERE id = ?`;
        Db_1.default.query(Select_One_IMG, [ID], (error, Result_Select_IMG) => {
            if (error)
                return Callback(error, null);
            let minID = Result_Select_IMG[0].min_id;
            Db_1.default.query(Query_IMG, [filePath, minID], (error, Result) => {
                if (error)
                    return Callback(error, null);
                Db_1.default.query(Query_Product, [Name, Price, ID], (error, Result) => {
                    if (error)
                        return Callback(error, null);
                    Callback(null, Result);
                });
            });
        });
    }
    ADD(Name, Price, filePath, Category, Callback) {
        let QUERY_Add = `INSERT INTO sanpham (id_loaidm , Tensp , Giaban)
	        VALUES (? , ? , ?);
        `;
        let INSERT_ID = `SELECT sanpham.id AS ID
            FROM sanpham
                WHERE sanpham.Tensp = ?
        		AND sanpham.Giaban = ? 
                AND sanpham.id_loaidm = ?;
        `;
        let INSER_ADD_IMG = `INSERT INTO anhsp (idsp , IMG)  VALUES (? , ? );`;
        Db_1.default.query(QUERY_Add, [Category, Name, Price], (error, Result) => {
            if (error)
                return Callback(error, null);
            Db_1.default.query(INSERT_ID, [Name, Price, Category], (error, Result_ID_Product) => {
                if (error)
                    return Callback(error, null);
                let ID_SELECT = Result_ID_Product[0].ID;
                Db_1.default.query(INSER_ADD_IMG, [ID_SELECT, filePath], (error, Result_Insert) => {
                    if (error)
                        return Callback(error, null);
                    Callback(null, Result_Insert);
                });
            });
        });
    }
}
exports.default = Product_Model;
