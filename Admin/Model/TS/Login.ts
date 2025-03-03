
import { error } from 'console';
import Connect from '../SQL/Db';
import { json } from 'stream/consumers';


class Login_Model {
    Login = (Email : string , Password : any , Callback : any) => {
        let Query_Login = `SELECT nguoidung.id AS ID_USER
            FROM nguoidung
            WHERE nguoidung.Quen = ?
                AND nguoidung.Email = ?
                AND nguoidung.Matkhau = ?
        `;

        Connect.query (Query_Login , [2 , Email , Password] , (error : string , Result : any) => {
            if (error) return  Callback (error , null);
            Callback (null , Result);
        });

        
    }

}

export default Login_Model;