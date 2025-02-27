
import { error } from 'console';
import Connect from '../SQL/Db';
import { callbackify } from 'util';


   

class Category_Model {
    Views  = (Callback : any) => {
        let Query_Login = `SELECT 	loaidanhmuc.id AS ID,
		loaidanhmuc.Tendm AS Name,
        danhmuc.id AS ID_Danhmuc,
        danhmuc.Tendm AS Name_Danhmuc
        	
        	FROM loaidanhmuc
            LEFT JOIN danhmuc
            	ON loaidanhmuc.iddm = danhmuc.id
        `;

        Connect.query (Query_Login , (error : string , Result : any) => {
            if (error) return Callback (error , null);
            Callback (null , Result);
        });
    }

    // Views
    View_Select_Category = (Callback : any) => {
        let Query_Login = `SELECT danhmuc.id AS ID,
		    danhmuc.Tendm AS Name
        	FROM danhmuc
        `;

        Connect.query (Query_Login , (error : string , Result : any) => {
            if (error) return Callback (error , null);
            Callback (null , Result);
        });
    }



    // Add 
    Add_News = (ID : number , Name_Category : string , Callback : any) => {
        let Query_Add : string =  `
            INSERT INTO loaidanhmuc (iddm , Tendm )
	        VALUES (? , ?);
        `;  
   
        Connect.query (Query_Add , [ID , Name_Category] , (error : string , Result : any) => {
            if (error) return Callback (error , null);
            Callback (null , Result);
        });
    }


    // Uplpoad
    Upload = (ID : number , ID_Edit : number , Name_Category : string , Callback : any) => {
        let Query_Add : string =  `UPDATE loaidanhmuc SET iddm = ? , Tendm = ? WHERE id = ?;`;  

        Connect.query (Query_Add , [ID , Name_Category , ID_Edit] , (error : string , Result : any) => {
            if (error) return Callback (error , null);
            Callback (null , Result);
        });
    }


    // Delete 
    Delete = (ID : number , Callback : any) => {
        let Query_Add : string =  `DELETE FROM loaidanhmuc WHERE loaidanhmuc.id = ?;`;  
        Connect.query (Query_Add , [ID] , (error : string , Result : any) => {
            if (error) return Callback (error , null);
            Callback (null , Result);
        });
    }



}

export default Category_Model;