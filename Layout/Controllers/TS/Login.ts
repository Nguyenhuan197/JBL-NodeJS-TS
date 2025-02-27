import Database_Login from '../Model/Login';

export const View_Login = (req: any, res: any, next: any) => {
    res.render('Login', {});
}  
   
export const Check_Login = (req: any, res: any, next: any) => {
    let Email: string = req.body.Email;
    let Password: string = req.body.Password;

    const SQL_Login = new Database_Login();
    SQL_Login.Login (Email , Password, (error: string, Result: any) => {
        if (error){     
            return next(error);   
        } else {        
            if (Result.length >= 1){
                let ID_USER: number = Result[0]['ID_USER'];
                res.cookie('USER_TRUE', ID_USER , { maxAge: 6000000, path: '/' });
                res.send ('Thanhcong');
            } else {
                res.send ('Thatbai');
            }


   
            
        }
          

    });

    
}
