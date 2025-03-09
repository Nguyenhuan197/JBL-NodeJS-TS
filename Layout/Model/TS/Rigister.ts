import { error } from 'console';
import Connect from '../SQL/Db';
   

class Database_Register {
    Save_Register = (Name: string, Email: string, Password: string, Callback: any) => {
        let Query_Add_User : string = `INSERT INTO nguoidung 
            (Quen, Ten, Email, Matkhau)
            VALUES (? , ? , ? , ?)
        `;  

        Connect.query(Query_Add_User , [1, Name, Email, Password], (error: string, Result: any) => {
            if (error) return Callback (error , null);
            Callback (null, {Name : Name , Email : Email});
        });
    }
    
    
    Check_Register = (Email : string, Password : string , Callback : any) => {
        let Query_Login = `SELECT nguoidung.id AS ID
            FROM nguoidung
            WHERE nguoidung.Email = ?
            AND  nguoidung.Matkhau = ?
            AND nguoidung.Trangthaitaikhoan = 2
        `;

        Connect.query (Query_Login , [Email , Password] , (error : string , Result : any) => {
            if (error) return Callback (error , null);
            Callback (null, Result);
        });
    }


    
}

export default Database_Register;
