import Connect from '../SQL/Db';

class Database_Login {  
    Login = (Email: string, Password: string, Callback: (err: string | null, result: any) => void) => {
        let Query: string = `SELECT nguoidung.id AS ID_USER
            FROM nguoidung
            WHERE nguoidung.Quen = ?
                AND nguoidung.Email = ?
                AND nguoidung.Matkhau = ?
        `;
            
        Connect.query(Query, [1 , Email, Password], (error: string, Result: any) => {
            if (error) {
                Callback(error, null);
            } else {
                Callback(null, Result);
            }
        });
           
    }
}

export default Database_Login;
