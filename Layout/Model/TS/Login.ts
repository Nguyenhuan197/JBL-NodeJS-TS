import Connect from '../SQL/Db';

class Database_Login {  
    Login = (Email: string, Password: string, Callback: (err: string | null, result: any) => void) => {
        let Query: string = `SELECT 
            nguoidung.id AS ID,
            nguoidung.Ten AS Name,
            nguoidung.Email AS Email

            FROM nguoidung
            WHERE nguoidung.Email = ?
                AND nguoidung.Matkhau = ?
                AND nguoidung.Trangthaitaikhoan = 2
        `;
            
        Connect.query(Query, [Email, Password], (error: string, Result: any) => {
            if (error) return Callback (error , null);
            Callback (null , Result);
        });
           
    }
}

export default Database_Login;
