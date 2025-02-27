
import { error } from 'console';
import Connect from '../SQL/Db';

class Login_Model {
    Login = (Email : string , Password : string , Callback : any) => {
        let Query_Login = `SELECT nguoidung.id AS ID_USER
            FROM nguoidung
            WHERE nguoidung.Quen = ?
                AND nguoidung.Email = ?
                AND nguoidung.Matkhau = ?
        `;

        Connect.query (Query_Login , [2 , Email , Password] , (error : string , Result : any) => {
            if (error){
                Callback (error , null);
            } else {
                Callback (null , Result);
            }
        });
    }

}

export default Login_Model;