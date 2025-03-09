import { error } from 'console';
import Connect from '../SQL/Db';
import { Query } from 'mysql2/typings/mysql/lib/protocol/sequences/Query';
    
class Acount_Model {
    Loadding_Inpomation = (ID_USER : number , Callback : any) => {
        let Query_Inpomation_User = `SELECT nguoidung.Ten AS Name,
            nguoidung.Email AS EMAIL,
            nguoidung.id AS ID_USER,   
            nguoidung.SĐT AS SĐT,
            nguoidung.Diachithem AS DC_CUTHE,
            nguoidung.IMG AS IMG,
            nguoidung.Gioitinh AS Gioitinh,
            nguoidung.Ngaysinh AS Birthday,
            nguoidung.Tinh_Thanhpho AS Thanhpho,
            nguoidung.Quan_huyen AS Quan_Huyen,
            nguoidung.Phuong_Thixa AS Phuong_Thixa 
            FROM nguoidung
            WHERE nguoidung.id = ? AND nguoidung.Trangthaitaikhoan = 2
        `;  

        Connect.query (Query_Inpomation_User , [ID_USER] , (error: string, Result: any) => {
            if (error) return Callback(error, null);
            Callback(null, JSON.stringify(Result));
        });
    }


    Upload = (ID : number , Name : string , Email : string , SDT : number , Birthday : any , Thanhpho : string ,  Quan_Huyen : string, Phuongthixa : string , Diachithem : string, Callback : any) => {
        let Query_Upload : string =  `UPDATE nguoidung
            SET nguoidung.Ten = ?,
            nguoidung.Email = ? ,
            nguoidung.SĐT = ?,
            nguoidung.Ngaysinh = ?,
            nguoidung.Tinh_Thanhpho = ?,
            nguoidung.Quan_huyen = ?,
            nguoidung.Phuong_Thixa = ?,
            nguoidung.Diachithem = ?
                WHERE nguoidung.id = ?  AND nguoidung.Trangthaitaikhoan = 2
        `;

        Connect.query (Query_Upload , [Name , Email , SDT , Birthday , Thanhpho , Quan_Huyen , Phuongthixa , Diachithem , ID ], (error : string , Result : any) => {
            if (error) return Callback (error , null);
            Callback (null , Result);
        })
    }


    Delete = (ID : number , Callback : any){
        let Query_Delete = `UPDATE nguoidung
            SET nguoidung.Trangthaitaikhoan = ?
                WHERE nguoidung.id = ? 
                AND nguoidung.Trangthaitaikhoan = 2
        `;

        Connect.query (Query_Delete , [1 , ID ] , (error : string , Result : any) => {
            if (error) return Callback (error , null);
            Callback (null , Result);
        })        
    }


}

export default Acount_Model;   