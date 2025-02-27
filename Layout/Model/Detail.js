"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Db_1 = __importDefault(require("../SQL/Db"));
class Detail {
    constructor(ID) {
        this.Load_Views = (Callback) => {
            let Query = `SELECT sanpham.Tensp AS Name_Product,
            sanpham.Giaban AS Price,
            sanpham.Tilegiamgia AS Sale,
            sanpham.URL_Youtube AS Youtobe,
            sanpham.Soluongsao AS Count_Star,
            sanpham.Soluongconlai AS Count_Remaining,
            sanpham.Dacdiemnoibat AS Dacdiemnoibat,
            sanpham.id AS ID,
            MIN(anhsp.IMG) AS IMG
        
            FROM sanpham
                INNER JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                    WHERE sanpham.id =?
            GROUP BY sanpham.id
        `;
            Db_1.default.query(Query, [this.ID], (error, results) => {
                if (error) {
                    Callback(error, null);
                }
                else {
                    Callback(null, results);
                }
            });
        };
        this.Load_IMG = (Callback) => {
            let Query = `SELECT anhsp.IMG AS IMG 
            FROM anhsp
            INNER JOIN sanpham
                ON anhsp.idsp = sanpham.id
            WHERE sanpham.id =?
        `;
            Db_1.default.query(Query, [this.ID], (error, results) => {
                if (error) {
                    Callback(error, null);
                }
                else {
                    Callback(null, results);
                }
            });
        };
        this.Load_Product_Sell_More = (ID, Callback) => {
            let Query = `SELECT sanpham.id AS ID,
            sanpham.Tensp AS Name,
            MIN(anhsp.IMG) AS IMG,
            sanpham.Giaban AS Price
            
            FROM sanpham
                LEFT JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                LEFT JOIN loaidanhmuc
                    ON sanpham.id_loaidm = loaidanhmuc.id
                
            WHERE loaidanhmuc.id = (SELECT id_loaidm FROM sanpham WHERE sanpham.id = ?)
            GROUP BY sanpham.id
            LIMIT 4
        `;
            Db_1.default.query(Query, [ID], (error, Result) => {
                if (error) {
                    Callback(error, null);
                }
                else {
                    Callback(null, Result);
                }
            });
        };
        this.ID = ID;
    }
}
exports.default = Detail;
