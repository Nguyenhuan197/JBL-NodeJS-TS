"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Db_1 = __importDefault(require("../SQL/Db"));
class Category_Model {
    constructor() {
        this.Views = (Callback) => {
            let Query_Login = `SELECT 	loaidanhmuc.id AS ID,
		loaidanhmuc.Tendm AS Name,
        danhmuc.id AS ID_Danhmuc,
        danhmuc.Tendm AS Name_Danhmuc
        	
        	FROM loaidanhmuc
            LEFT JOIN danhmuc
            	ON loaidanhmuc.iddm = danhmuc.id
        `;
            Db_1.default.query(Query_Login, (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
        // Views
        this.View_Select_Category = (Callback) => {
            let Query_Login = `SELECT danhmuc.id AS ID,
		    danhmuc.Tendm AS Name
        	FROM danhmuc
        `;
            Db_1.default.query(Query_Login, (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
        // Add 
        this.Add_News = (ID, Name_Category, Callback) => {
            let Query_Add = `
            INSERT INTO loaidanhmuc (iddm , Tendm )
	        VALUES (? , ?);
        `;
            Db_1.default.query(Query_Add, [ID, Name_Category], (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
        // Uplpoad
        this.Upload = (ID, ID_Edit, Name_Category, Callback) => {
            let Query_Add = `UPDATE loaidanhmuc SET iddm = ? , Tendm = ? WHERE id = ?;`;
            Db_1.default.query(Query_Add, [ID, Name_Category, ID_Edit], (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
        // Delete 
        this.Delete = (ID, Callback) => {
            let Query_Add = `DELETE FROM loaidanhmuc WHERE loaidanhmuc.id = ?;`;
            Db_1.default.query(Query_Add, [ID], (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
    }
}
exports.default = Category_Model;
