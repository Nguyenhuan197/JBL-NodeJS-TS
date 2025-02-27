"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Db_1 = __importDefault(require("../SQL/Db"));
class USER_Model {
    constructor() {
        this.View_API = (Callback) => {
            let QUERY_Data = `
            SELECT nguoidung.id AS ID,
            nguoidung.Ten AS Name,
            nguoidung.Quen AS Power,
            nguoidung.IMG AS IMG,
            nguoidung.SĐT AS SDT,
            nguoidung.Email AS Email
                FROM nguoidung
        `;
            Db_1.default.query(QUERY_Data, (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
        this.Upload_Power = (Power_Edit, ID_EDIT, Callback) => {
            let QUERY_Edit = `
            UPDATE nguoidung SET	
	        nguoidung.Quen = ?
    	        WHERE nguoidung.id = ?
        `;
            Db_1.default.query(QUERY_Edit, [Power_Edit, ID_EDIT], (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
        this.Delete_Power = (Power_Delete, Callback) => {
            let QUERY_Delete = `DELETE nguoidung FROM nguoidung WHERE nguoidung.id = ?`;
            Db_1.default.query(QUERY_Delete, [Power_Delete], (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
    }
}
exports.default = USER_Model;
