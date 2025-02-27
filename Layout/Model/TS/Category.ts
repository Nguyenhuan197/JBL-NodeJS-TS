
import { error } from 'console';
import Connect from '../SQL/Db';      

class Category {
    Loading_Category = (ID_CATEGORY : number, Callback : any) => {
        let Query = `SELECT 
            sanpham.Tensp AS Name,
            sanpham.Giaban AS Price,
            sanpham.id AS ID,
            MIN(anhsp.IMG) AS IMG,
            danhmuc.Tendm AS Name_Category
            
            FROM sanpham
                INNER JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                INNER JOIN loaidanhmuc
                    ON sanpham.id_loaidm = loaidanhmuc.id
                LEFT JOIN danhmuc
                	ON loaidanhmuc.iddm = danhmuc.id
                
                WHERE loaidanhmuc.iddm =?
            GROUP BY sanpham.id
        `;
        

        Connect.query (Query , [ID_CATEGORY] , (error : any , Result : any) => {
            if (error){
                Callback (error , null);
            } else {
                Callback (null , Result);
            }
        });
    }





    Loading_Fill_Category = (Min : number, Max : number ,  Callback : any) => {
        let Query = `SELECT 
            sanpham.Tensp AS Name,
            sanpham.Giaban AS Price,
            sanpham.id AS ID,
            MIN(anhsp.IMG) AS IMG,
            danhmuc.Tendm AS Name_Category
            
            FROM sanpham
                INNER JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                INNER JOIN loaidanhmuc
                    ON sanpham.id_loaidm = loaidanhmuc.id
                LEFT JOIN danhmuc
                	ON loaidanhmuc.iddm = danhmuc.id
                
                  WHERE sanpham.Giaban > ? 
                        AND sanpham.Giaban < ?
            GROUP BY sanpham.id
        `;
        

        Connect.query (Query , [Min , Max] , (error : any , Result : any) => {
            if (error){
                Callback (error , null);
            } else {
                Callback (null , Result);
            }
        });
    }


}


    export default Category;