"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Db_1 = __importDefault(require("../SQL/Db"));
class Category {
    constructor() {
        this.Loading_Category = (ID_CATEGORY, Callback) => {
            let Query = `SELECT 
            sanpham.Tensp AS Name,
            sanpham.Giaban AS Price,
            sanpham.id AS ID,
            MIN(anhsp.IMG) AS IMG,
            danhmuc.Tendm AS Name_Category
            
            FROM sanpham
                INNER JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                INNER JOIN loaidanhmuc
                    ON sanpham.id_loaidm = loaidanhmuc.id
                LEFT JOIN danhmuc
                	ON loaidanhmuc.iddm = danhmuc.id
                
                WHERE loaidanhmuc.iddm =?
            GROUP BY sanpham.id
        `;
            Db_1.default.query(Query, [ID_CATEGORY], (error, Result) => {
                if (error) {
                    Callback(error, null);
                }
                else {
                    Callback(null, Result);
                }
            });
        };
        this.Loading_Fill_Category = (Min, Max, Callback) => {
            let Query = `SELECT 
            sanpham.Tensp AS Name,
            sanpham.Giaban AS Price,
            sanpham.id AS ID,
            MIN(anhsp.IMG) AS IMG,
            danhmuc.Tendm AS Name_Category
            
            FROM sanpham
                INNER JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                INNER JOIN loaidanhmuc
                    ON sanpham.id_loaidm = loaidanhmuc.id
                LEFT JOIN danhmuc
                	ON loaidanhmuc.iddm = danhmuc.id
                
                  WHERE sanpham.Giaban > ? 
                        AND sanpham.Giaban < ?
            GROUP BY sanpham.id
        `;
            Db_1.default.query(Query, [Min, Max], (error, Result) => {
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
exports.default = Category;
