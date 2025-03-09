import { error } from 'console';
import Connect from '../SQL/Db';
import { Query } from 'mysql2/typings/mysql/lib/protocol/sequences/Query';



class Home {
    Category_Loanghenhac = (Callback : any) => {
        let Query_Loanghenhac : string = `SELECT loaidanhmuc.Tendm AS Name_Categorry,
            loaidanhmuc.id AS ID_Categorry
            FROM danhmuc
                LEFT JOIN loaidanhmuc
                    ON loaidanhmuc.iddm = danhmuc.id      
                WHERE danhmuc.id = 1
        `;

        Connect.query (Query_Loanghenhac , (error : any , Result : any) => {
            if (error){
                Callback (error , null);
            } else {
                Callback (null , Result);  
            }
        });
    }



    Category_Tainghe = (Callback : any) => {
        let Query_Tainghe : string = `SELECT loaidanhmuc.Tendm AS Name_Categorry,
            loaidanhmuc.id AS ID_Categorry
            FROM danhmuc
                LEFT JOIN loaidanhmuc
                    ON loaidanhmuc.iddm = danhmuc.id      
                WHERE danhmuc.id = 2
        `;

        Connect.query (Query_Tainghe , (error : any , Result : any) => {
            if (error){
                Callback (error , null);
            } else {
                Callback (null , Result);
            }
        });
    }



    Category_Amthanhgiadinh = (Callback : any) => {
        let Query_Amthanhgiadinh : string = `SELECT loaidanhmuc.Tendm AS Name_Categorry,
            loaidanhmuc.id AS ID_Categorry
            FROM danhmuc
                LEFT JOIN loaidanhmuc
                    ON loaidanhmuc.iddm = danhmuc.id      
            WHERE danhmuc.id = 3
        `;

        Connect.query (Query_Amthanhgiadinh , (error : string , Result : any) => {
            if (error){
                Callback (error , null);
            } else {
                Callback (null , Result);
            }
        });
    }


    Category_Sanphamgaming = (Callback : any) => {
        let Query_Sanphamgaming : string = `SELECT loaidanhmuc.Tendm AS Name_Categorry,
            loaidanhmuc.id AS ID_Categorry
            FROM danhmuc
                LEFT JOIN loaidanhmuc
                    ON loaidanhmuc.iddm = danhmuc.id      
            WHERE danhmuc.id = 4
        `;
   
        Connect.query (Query_Sanphamgaming , (error : string , Result : any) => {
            if (error){
                Callback (error , null);
            } else {
                Callback (null , Result);
            }
        });
    }



    Categotry_Amthanhchuyennghiep = (Callback : any) => {
        let Query_Amthanhchuyennghiep : string = `SELECT loaidanhmuc.Tendm AS Name_Categorry,
            loaidanhmuc.id AS ID_Categorry
            FROM danhmuc
                LEFT JOIN loaidanhmuc
                    ON loaidanhmuc.iddm = danhmuc.id      
                WHERE danhmuc.id = 5
        `;

        Connect.query (Query_Amthanhchuyennghiep , (error : string , Result : any) => {
            if (error){
                Callback (error , null);
            } else {
                Callback (null , Result);
            }
        });

    }


    // -- -----------------


    TopSP_Banchay_Loa = (Callback : any) => {
        let Query_TOP_SP = `SELECT 	sanpham.id AS ID ,
            sanpham.Tensp AS Name,
            MIN(anhsp.IMG) AS IMG,
            sanpham.Luotban AS Luotban
            
            FROM sanpham
                LEFT JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                LEFT JOIN loaidanhmuc
                    ON sanpham.id_loaidm = loaidanhmuc.id
                LEFT JOIN danhmuc
                    ON loaidanhmuc.iddm = danhmuc.id
                    
            WHERE danhmuc.id = 1   
            AND sanpham.Tranthai = 2
                
                GROUP BY sanpham.id
               	   ORDER BY sanpham.Luotban DESC
            LIMIT 2
        `;

        Connect.query (Query_TOP_SP , (error : string , Result : any) => {
            if (error) return Callback (error , null);
            Callback (null , Result);
        });
    }   




    TopSP_Banchay_Tainghe = (Callback : any) => {
        let Query_TOP_SP = `SELECT 	sanpham.id AS ID ,
            sanpham.Tensp AS Name,
            MIN(anhsp.IMG) AS IMG,
            sanpham.Luotban AS Luotban
            
            FROM sanpham
                LEFT JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                LEFT JOIN loaidanhmuc
                    ON sanpham.id_loaidm = loaidanhmuc.id
                LEFT JOIN danhmuc
                    ON loaidanhmuc.iddm = danhmuc.id
                    
            WHERE danhmuc.id = 2
            AND sanpham.Tranthai = 2    

                GROUP BY sanpham.id
               	   ORDER BY sanpham.Luotban DESC
            LIMIT 2
        `;

        Connect.query (Query_TOP_SP , (error : string , Result : any) => {
            if (error) return Callback (error , null);
            Callback (null , Result);
        });
    }   



    TopSP_Banchay_Gamming = (Callback : any) => {
        let Query_TOP_SP = `SELECT 	sanpham.id AS ID ,
            sanpham.Tensp AS Name,
            MIN(anhsp.IMG) AS IMG,
            sanpham.Luotban AS Luotban
            
            FROM sanpham
                LEFT JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                LEFT JOIN loaidanhmuc
                    ON sanpham.id_loaidm = loaidanhmuc.id
                LEFT JOIN danhmuc
                    ON loaidanhmuc.iddm = danhmuc.id
                    
            WHERE danhmuc.id = 4
                
                GROUP BY sanpham.id
               	   ORDER BY sanpham.Luotban DESC
            LIMIT 2
        `;

        Connect.query (Query_TOP_SP , (error : string , Result : any) => {
            if (error) return Callback (error , null);
            Callback (null , Result);
        });
    }   


    Sale_Price = (Callback : any) => {
        let Query : string = `SELECT sanpham.Tensp AS Name,
            sanpham.Giaban AS Price,
            sanpham.id AS ID,
            MIN(anhsp.IMG) AS IMG
            
            FROM sanpham
                INNER JOIN anhsp
                    ON sanpham.id = anhsp.idsp
      	
        	WHERE sanpham.Sale = 'YES'
            AND sanpham.Tranthai = 2
            GROUP BY sanpham.id
            ORDER BY RAND() LIMIT 4
        `;

        Connect.query (Query ,(err : any , results : any) => {
            if (err){
                Callback (err , null);
            } else {
                Callback (null , results);
            }
        });
    }

  
    Loadding_Loa = (Callback: any) => {
        let Query: string = `SELECT 
            sanpham.Tensp AS Name,
            sanpham.Giaban AS Price,
            sanpham.id AS ID,
            MIN(anhsp.IMG) AS IMG
            
            FROM sanpham
                INNER JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                INNER JOIN loaidanhmuc
                    ON sanpham.id_loaidm = loaidanhmuc.id
                
                WHERE loaidanhmuc.iddm = 1    
                AND sanpham.Tranthai = 2
            GROUP BY sanpham.id
        `;
   
        Connect.query (Query, (err: any, results: any) => { 
            if (err) {
                Callback(err, null);
            } else {
                Callback(null, results);
            }
        });
    }


    Loadding_Tainghe = (Callback : any) => {{
        let Query : string = `SELECT sanpham.Tensp AS Name,
            sanpham.Giaban AS Price,
            sanpham.id AS ID,
            MIN(anhsp.IMG) AS IMG
            
            FROM sanpham
                INNER JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                INNER JOIN loaidanhmuc
                    ON sanpham.id_loaidm = loaidanhmuc.id
                
                WHERE loaidanhmuc.iddm = 2    
                AND sanpham.Tranthai = 2
            GROUP BY sanpham.id
        `;

        Connect.query (Query , (err : any , results : any) => {
            if (err){
                Callback (err , null);
            } else {
                Callback (null , results);
            }
        });
    }}



    Loadding_Gamming = (Callback : any) => {
        let Query : string = `SELECT 
            sanpham.Tensp AS Name,
            sanpham.Giaban AS Price,
            sanpham.id AS ID,
            MIN(anhsp.IMG) AS IMG
            
            FROM sanpham
                INNER JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                INNER JOIN loaidanhmuc
                    ON sanpham.id_loaidm = loaidanhmuc.id
                
                WHERE loaidanhmuc.iddm = 4
                AND sanpham.Tranthai = 2
            GROUP BY sanpham.id
        `;

        Connect.query (Query , (error : any , results : any) => {
            if (error){
                Callback (error , null);
            } else {
                Callback (null , results);
            }
        });
    } 


    Loadding_Loagiadinh = (Callback : any) => {
        let Query : string = `SELECT 
            sanpham.Tensp AS Name,
            sanpham.Giaban AS Price,
            sanpham.id AS ID,
            MIN(anhsp.IMG) AS IMG
            
            FROM sanpham
                INNER JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                INNER JOIN loaidanhmuc
                    ON sanpham.id_loaidm = loaidanhmuc.id
                
                WHERE loaidanhmuc.iddm = 3
                AND sanpham.Tranthai = 2
            GROUP BY sanpham.id
        `;


        Connect.query (Query , (error : any , Results : any) => {
            if (error){
                Callback (error , null);
            } else {
                Callback (null , Results);
            }
        });
    }



    Loadding_Youtube = (Callback : any) => {
        let Query : string = `SELECT youtube.Tieude AS Title,
            youtube.Image AS IMG,
            youtube.Url AS URL
            
            FROM youtube
                WHERE youtube.Trangthai = 2
                GROUP BY youtube.id
                ORDER BY RAND() LIMIT 4
        `;

        Connect.query (Query , (error : string , Result : any) => {
            if (error){
                Callback (error , null);
            } else {
                Callback (null , Result);
            }
        });
    }

  
}


export default Home ;