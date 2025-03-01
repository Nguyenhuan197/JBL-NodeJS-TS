"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Db_1 = __importDefault(require("../SQL/Db"));
class Home {
    constructor() {
        this.Category_Loanghenhac = (Callback) => {
            let Query_Loanghenhac = `SELECT loaidanhmuc.Tendm AS Name_Categorry,
            loaidanhmuc.id AS ID_Categorry
            FROM danhmuc
                LEFT JOIN loaidanhmuc
                    ON loaidanhmuc.iddm = danhmuc.id      
                WHERE danhmuc.id = 1
        `;
            Db_1.default.query(Query_Loanghenhac, (error, Result) => {
                if (error) {
                    Callback(error, null);
                }
                else {
                    Callback(null, Result);
                }
            });
        };
        this.Category_Tainghe = (Callback) => {
            let Query_Tainghe = `SELECT loaidanhmuc.Tendm AS Name_Categorry,
            loaidanhmuc.id AS ID_Categorry
            FROM danhmuc
                LEFT JOIN loaidanhmuc
                    ON loaidanhmuc.iddm = danhmuc.id      
                WHERE danhmuc.id = 2
        `;
            Db_1.default.query(Query_Tainghe, (error, Result) => {
                if (error) {
                    Callback(error, null);
                }
                else {
                    Callback(null, Result);
                }
            });
        };
        this.Category_Amthanhgiadinh = (Callback) => {
            let Query_Amthanhgiadinh = `SELECT loaidanhmuc.Tendm AS Name_Categorry,
            loaidanhmuc.id AS ID_Categorry
            FROM danhmuc
                LEFT JOIN loaidanhmuc
                    ON loaidanhmuc.iddm = danhmuc.id      
            WHERE danhmuc.id = 3
        `;
            Db_1.default.query(Query_Amthanhgiadinh, (error, Result) => {
                if (error) {
                    Callback(error, null);
                }
                else {
                    Callback(null, Result);
                }
            });
        };
        this.Category_Sanphamgaming = (Callback) => {
            let Query_Sanphamgaming = `SELECT loaidanhmuc.Tendm AS Name_Categorry,
            loaidanhmuc.id AS ID_Categorry
            FROM danhmuc
                LEFT JOIN loaidanhmuc
                    ON loaidanhmuc.iddm = danhmuc.id      
            WHERE danhmuc.id = 4
        `;
            Db_1.default.query(Query_Sanphamgaming, (error, Result) => {
                if (error) {
                    Callback(error, null);
                }
                else {
                    Callback(null, Result);
                }
            });
        };
        this.Categotry_Amthanhchuyennghiep = (Callback) => {
            let Query_Amthanhchuyennghiep = `SELECT loaidanhmuc.Tendm AS Name_Categorry,
            loaidanhmuc.id AS ID_Categorry
            FROM danhmuc
                LEFT JOIN loaidanhmuc
                    ON loaidanhmuc.iddm = danhmuc.id      
                WHERE danhmuc.id = 5
        `;
            Db_1.default.query(Query_Amthanhchuyennghiep, (error, Result) => {
                if (error) {
                    Callback(error, null);
                }
                else {
                    Callback(null, Result);
                }
            });
        };
        // -- -----------------
        this.TopSP_Banchay_Loa = (Callback) => {
            let Query_TOP_SP = `SELECT 	sanpham.id AS ID ,
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
                    
            WHERE danhmuc.id = 1   
                
                GROUP BY sanpham.id
               	   ORDER BY sanpham.Luotban DESC
            LIMIT 2
        `;
            Db_1.default.query(Query_TOP_SP, (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
        this.TopSP_Banchay_Tainghe = (Callback) => {
            let Query_TOP_SP = `SELECT 	sanpham.id AS ID ,
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
                    
            WHERE danhmuc.id = 2
                
                GROUP BY sanpham.id
               	   ORDER BY sanpham.Luotban DESC
            LIMIT 2
        `;
            Db_1.default.query(Query_TOP_SP, (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
        this.TopSP_Banchay_Gamming = (Callback) => {
            let Query_TOP_SP = `SELECT 	sanpham.id AS ID ,
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
                    
            WHERE danhmuc.id = 4
                
                GROUP BY sanpham.id
               	   ORDER BY sanpham.Luotban DESC
            LIMIT 2
        `;
            Db_1.default.query(Query_TOP_SP, (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
        this.Sale_Price = (Callback) => {
            let Query = `SELECT sanpham.Tensp AS Name,
            sanpham.Giaban AS Price,
            sanpham.id AS ID,
            MIN(anhsp.IMG) AS IMG
            
            FROM sanpham
                INNER JOIN anhsp
                    ON sanpham.id = anhsp.idsp
      	
        	WHERE sanpham.Sale = 'YES'
            GROUP BY sanpham.id
            ORDER BY RAND() LIMIT 4
        `;
            Db_1.default.query(Query, (err, results) => {
                if (err) {
                    Callback(err, null);
                }
                else {
                    Callback(null, results);
                }
            });
        };
        this.Loadding_Loa = (Callback) => {
            let Query = `SELECT 
            sanpham.Tensp AS Name,
            sanpham.Giaban AS Price,
            sanpham.id AS ID,
            MIN(anhsp.IMG) AS IMG
            
            FROM sanpham
                INNER JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                INNER JOIN loaidanhmuc
                    ON sanpham.id_loaidm = loaidanhmuc.id
                
                WHERE loaidanhmuc.iddm = 1    
            GROUP BY sanpham.id
        `;
            Db_1.default.query(Query, (err, results) => {
                if (err) {
                    Callback(err, null);
                }
                else {
                    Callback(null, results);
                }
            });
        };
        this.Loadding_Tainghe = (Callback) => {
            {
                let Query = `SELECT sanpham.Tensp AS Name,
            sanpham.Giaban AS Price,
            sanpham.id AS ID,
            MIN(anhsp.IMG) AS IMG
            
            FROM sanpham
                INNER JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                INNER JOIN loaidanhmuc
                    ON sanpham.id_loaidm = loaidanhmuc.id
                
                WHERE loaidanhmuc.iddm = 2    
            GROUP BY sanpham.id
        `;
                Db_1.default.query(Query, (err, results) => {
                    if (err) {
                        Callback(err, null);
                    }
                    else {
                        Callback(null, results);
                    }
                });
            }
        };
        this.Loadding_Gamming = (Callback) => {
            let Query = `SELECT 
            sanpham.Tensp AS Name,
            sanpham.Giaban AS Price,
            sanpham.id AS ID,
            MIN(anhsp.IMG) AS IMG
            
            FROM sanpham
                INNER JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                INNER JOIN loaidanhmuc
                    ON sanpham.id_loaidm = loaidanhmuc.id
                
                WHERE loaidanhmuc.iddm = 4
            GROUP BY sanpham.id
        `;
            Db_1.default.query(Query, (error, results) => {
                if (error) {
                    Callback(error, null);
                }
                else {
                    Callback(null, results);
                }
            });
        };
        this.Loadding_Loagiadinh = (Callback) => {
            let Query = `SELECT 
            sanpham.Tensp AS Name,
            sanpham.Giaban AS Price,
            sanpham.id AS ID,
            MIN(anhsp.IMG) AS IMG
            
            FROM sanpham
                INNER JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                INNER JOIN loaidanhmuc
                    ON sanpham.id_loaidm = loaidanhmuc.id
                
                WHERE loaidanhmuc.iddm = 3
            GROUP BY sanpham.id
        `;
            Db_1.default.query(Query, (error, Results) => {
                if (error) {
                    Callback(error, null);
                }
                else {
                    Callback(null, Results);
                }
            });
        };
        this.Loadding_Youtube = (Callback) => {
            let Query = `SELECT youtube.Tieude AS Title,
            youtube.Image AS IMG,
            youtube.Url AS URL
            
            FROM youtube
                WHERE youtube.Trangthai = 2
                GROUP BY youtube.id
                ORDER BY RAND() LIMIT 4
        `;
            Db_1.default.query(Query, (error, Result) => {
                if (error) {
                    Callback(error, null);
                }
                else {
                    Callback(null, Result);
                }
            });
        };
    }
}
exports.default = Home;
