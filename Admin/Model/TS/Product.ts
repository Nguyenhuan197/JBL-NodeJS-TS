
import { error } from 'console';
import Connect from '../SQL/Db';
import { callbackify } from 'util';

class Product_Model {
    View_Data_Product = (Callback : any) => {
        let Query_API_Product = `WITH RankedImages AS (
                SELECT 
                    sanpham.Tranthai AS Trangthaisp,
                    sanpham.id AS ID,
                    sanpham.Tensp AS Name,
                    sanpham.Giaban AS Price,
                    loaidanhmuc.Tendm AS Category,
                    anhsp.IMG AS IMG,
                    ROW_NUMBER() OVER (PARTITION BY sanpham.id ORDER BY anhsp.id) AS rn
                FROM sanpham
                LEFT JOIN loaidanhmuc 
                    ON sanpham.id_loaidm = loaidanhmuc.id
                LEFT JOIN anhsp 
                    ON sanpham.id = anhsp.idsp
            )
            SELECT 
                ID,
                Name,
                Price,
                Category,
                IMG,
                Trangthaisp  -- Bao gồm cột Trangthaisp trong truy vấn cuối cùng
            FROM RankedImages
            WHERE rn = 1;

        `;

        Connect.query(Query_API_Product , (error : string , Result : any) => {
            if (error){
                Callback (error , null);
            } else {
                Callback (null , Result);
            }
        });
    }


    
  
    Delete = (ID: number, Callback: (error: string | null, result?: any) => void) => {
        let Query_Select_IMG = `SELECT anhsp.IMG FROM anhsp WHERE anhsp.idsp = ?`;
        let Query_Delete_IMG_Product = `DELETE FROM anhsp WHERE anhsp.idsp = ?`;
        let Query_Delete_Product = `DELETE FROM sanpham WHERE sanpham.id = ?`;
    
        // Lấy IMG
        Connect.query(Query_Select_IMG, [ID], (error: string, result_IMG: any) => {
            if (error){
                return Callback(error)
            } else {
                // Chuyển danh sách ảnh từ object thành mảng chuỗi ảnh
                let IMG = result_IMG.map((row: any) => row.IMG) || [];


                 // Xóa IMG
                Connect.query(Query_Delete_IMG_Product, [ID], (error: string, result1: any) => {
                    if (error) return Callback(error);
        
                    // Xoa Product
                    Connect.query(Query_Delete_Product, [ID], (error: string, result2: any) => {
                        if (error) return Callback(error);
                        Callback(null, IMG);
                    });
                });
            }

        });


    };
 
    
    Upload(ID: number, Name: string, Price: number, filePath: string, Callback: any) {
        if (!ID || !filePath || !Name || isNaN(Price)) {
            return Callback("Dữ liệu không hợp lệ", null);
        }
    
        let Select_One_IMG = `SELECT MIN(id) AS min_id FROM anhsp WHERE idsp = ?`;
        let Query_IMG = `UPDATE anhsp SET IMG = ? WHERE id = ?`;
        let Query_Product = `UPDATE sanpham SET Tensp = ?, Giaban = ? WHERE id = ?`;
    
        Connect.query(Select_One_IMG, [ID], (error: string, Result_Select_IMG: any) => {
            if (error) return Callback(error, null);
            let minID = Result_Select_IMG[0].min_id; 
            
            Connect.query(Query_IMG, [filePath, minID], (error: string, Result: any) => {
                if (error) return Callback(error, null);
                Connect.query(Query_Product, [Name, Price, ID], (error: string, Result: any) => {
                    if (error) return Callback(error, null);
                    Callback(null, Result);
                });
            });
        });
    }
    

    ADD (Name: string, Price: number, filePath: string , Category : number , Callback: any) {
        let QUERY_Add : string = `INSERT INTO sanpham (id_loaidm , Tensp , Giaban)
	        VALUES (? , ? , ?);
        `;

        let INSERT_ID : string = `SELECT sanpham.id AS ID
            FROM sanpham
                WHERE sanpham.Tensp = ?
        		AND sanpham.Giaban = ? 
                AND sanpham.id_loaidm = ?;
        `;

        let INSER_ADD_IMG : string = `INSERT INTO anhsp (idsp , IMG)  VALUES (? , ? );`;

        Connect.query (QUERY_Add , [Category , Name , Price] , (error : string , Result : any) => {
            if (error) return Callback (error , null);
            Connect.query (INSERT_ID , [Name , Price , Category] , (error : string , Result_ID_Product : any) => {
                if (error) return Callback (error , null);
                let ID_SELECT : number = Result_ID_Product[0].ID;
                Connect.query (INSER_ADD_IMG , [ID_SELECT , filePath] , (error : string , Result_Insert : any) => {
                    if (error) return Callback (error , null)
                        Callback (null , Result_Insert);
                })
            })
        });
    }


    Pheduyetsanpham = (ID_Upload_Static_Product : number , Value_Status_Product : number , Callback : any) => {
        let QUERY_Upload_Static_Product : string = ` 
               UPDATE sanpham SET	
	            sanpham.Tranthai = ?
    	        WHERE sanpham.id = ?
        `;

        Connect.query (QUERY_Upload_Static_Product , [ID_Upload_Static_Product , Value_Status_Product] , (error : string , Result : any) => {
            if (error) return Callback (error , null);
            Callback (null , Result);
        })
    }
    





    // Test API NODE JS
    Top10_Hot_Product = (Callback : any) => {
        let QUERY_TOP10_PRODUCT : string = `
              SELECT sanpham.id AS ID ,
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
                
                GROUP BY sanpham.id
               	   ORDER BY sanpham.Luotban DESC
            LIMIT 10
        `;
       
        Connect.query (QUERY_TOP10_PRODUCT , (error : string , Result : any) =>{
            if (error ) return Callback (error , null);
            Callback (null , Result);
        });
    }

  

    // Page_Category
    Page_Category = (ID_Category : number , Callback : any) => {
        let Page_Category : string = `
              SELECT sanpham.id AS ID,
                sanpham.Tensp AS Name,
                sanpham.Luotban AS Luotban, 
                sanpham.Giaban AS Price,
                MIN(anhsp.IMG) AS IMG
                
                FROM sanpham
                    
                LEFT JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                LEFT JOIN loaidanhmuc
                    ON sanpham.id_loaidm = loaidanhmuc.id
                    
                    WHERE loaidanhmuc.id = ?
                    GROUP BY sanpham.id
                    LIMIT 20
        `;
       
        Connect.query (Page_Category , [ID_Category] , (error : string , Result : any) =>{
            if (error) return Callback (error , null);
            Callback (null , Result);
        });
    }



    // Sap xep giảm dan 
    Ascending_Order_Product = (Callback : any) => {
        let Ascending_Order_Product : string = `
            SELECT sanpham.id AS ID,
            sanpham.Tensp AS Name,
            sanpham.Luotban AS Luotban, 
            sanpham.Giaban AS Price,
            MIN(anhsp.IMG) AS IMG
            
            FROM sanpham
                
            LEFT JOIN anhsp
                ON sanpham.id = anhsp.idsp
            
                
            GROUP BY sanpham.id
            ORDER BY sanpham.Giaban DESC
                LIMIT 20
        `;
       
        Connect.query (Ascending_Order_Product , (error : string , Result : any) =>{
            if (error) return Callback (error , null);
            Callback (null , Result);
        });
    }



    // săp xep tang dan 
    Descending_Order_Product = (Callback : any) => {
        let Descending_Order_Product : string = `
            SELECT sanpham.id AS ID,
            sanpham.Tensp AS Name,
            sanpham.Luotban AS Luotban, 
            sanpham.Giaban AS Price,
            MIN(anhsp.IMG) AS IMG
            
            FROM sanpham
                
            LEFT JOIN anhsp
                ON sanpham.id = anhsp.idsp
            
                
            GROUP BY sanpham.id
            ORDER BY sanpham.Giaban ASC
                LIMIT 20
        `;
       
        Connect.query (Descending_Order_Product , (error : string , Result : any) =>{
            if (error) return Callback (error , null);
            Callback (null , Result);
        });
    }


    // Trạng thái sản phẩm đã duyêt 
    Status_Product_True = (Callback : any) => {
        let Status_Product_True : string = `
            SELECT sanpham.id AS ID,
            sanpham.Tensp AS Name,
            sanpham.Luotban AS Luotban, 
            sanpham.Giaban AS Price,
            MIN(anhsp.IMG) AS IMG
            
            FROM sanpham
            LEFT JOIN anhsp
                ON sanpham.id = anhsp.idsp
                WHERE sanpham.Tranthai = 2
                GROUP BY sanpham.id
                    LIMIT 30	
                   
        `;
       
        Connect.query (Status_Product_True , (error : string , Result : any) =>{
            if (error) return Callback (error , null);
            Callback (null , Result);
        });
    }




    // Trạng thái sản phẩm chưa duyêt 
    Status_Product_Fall = (Callback : any) => {
        let Status_Product_Fall : string = `
            SELECT sanpham.id AS ID,
            sanpham.Tensp AS Name,
            sanpham.Luotban AS Luotban, 
            sanpham.Giaban AS Price,
            MIN(anhsp.IMG) AS IMG
            
            FROM sanpham
            LEFT JOIN anhsp
                ON sanpham.id = anhsp.idsp
                WHERE sanpham.Tranthai = 1
                GROUP BY sanpham.id
                    LIMIT 30	
                   
        `;
       
        Connect.query (Status_Product_Fall , (error : string , Result : any) =>{
            if (error) return Callback (error , null);
            Callback (null , Result);
        });
    }


    
    // Tìm kiếm sản phẩm
    Search_Product = (KEY_SEARCH : any , Callback : any) => {
        let Status_Product_Fall : string = `
             SELECT sanpham.id AS ID,
                sanpham.Tensp AS Name,
                sanpham.Luotban AS Luotban, 
                sanpham.Giaban AS Price,
                MIN(anhsp.IMG) AS IMG
            
            FROM sanpham
            
            LEFT JOIN anhsp
                ON sanpham.id = anhsp.idsp
                WHERE LOWER(sanpham.Tensp) LIKE CONCAT('%', LOWER(?), '%')
                GROUP BY sanpham.id
                    LIMIT 30	
        `;
       
        Connect.query (Status_Product_Fall , [KEY_SEARCH] , (error : string , Result : any) =>{
            if (error) return Callback (error , null);
            Callback (null , Result);
        });
    }



    
    // Trạng thái đơn hàng đã giao chưa giao 
    Trangthaidonhang = (Key_Status : any , Callback : any) => {
        let Trangthaidonhang : string = `
          SELECT  hoadon_c.id AS ID,
            hoadon_c.Tensp AS Name,
            hoadon_c.Time_ AS Time,
            sanpham.id AS ID_Donhang,    
            
            (SELECT nguoidung.Ten FROM nguoidung WHERE nguoidung.id = hoadon_c.ID_Khachhang ) AS Tenkhachhang,
            (SELECT nguoidung.Tinh_Thanhpho FROM nguoidung WHERE nguoidung.id = hoadon_c.ID_Khachhang) AS Diachikhachhang,
                
            hoadon_c.Soluong AS Count,
            hoadon_c.Tongtien AS Tongtien,
            hoadon_c.Trangthaidonhang AS Tinhtrang,
           	MIN(anhsp.IMG) AS IMG            
            FROM hoadon_c
            
            LEFT JOIN sanpham
                ON sanpham.id = hoadon_c.id_donhang
            LEFT JOIN anhsp
                ON sanpham.id = anhsp.idsp
                
                WHERE hoadon_c.Trangthaidonhang = ?
            GROUP BY hoadon_c.id
        `;
       
        Connect.query (Trangthaidonhang , [Key_Status] , (error : string , Result : any) =>{
            if (error) return Callback (error , null);
            Callback (null , Result);
        });
    }



    // Thông tin đơn hàng 
    Thongtindonhang = (Callback : any) => {
        let Trangthaidonhang : string = `
          SELECT  hoadon_c.id AS ID,
            hoadon_c.Tensp AS Name,
            hoadon_c.Time_ AS Time,
            sanpham.id AS ID_Donhang,    
            
            (SELECT nguoidung.Ten FROM nguoidung WHERE nguoidung.id = hoadon_c.ID_Khachhang ) AS Tenkhachhang,
            (SELECT nguoidung.Tinh_Thanhpho FROM nguoidung WHERE nguoidung.id = hoadon_c.ID_Khachhang) AS Diachikhachhang,
                
            hoadon_c.Soluong AS Count,
            hoadon_c.Tongtien AS Tongtien,
            hoadon_c.Trangthaidonhang AS Tinhtrang,
           	MIN(anhsp.IMG) AS IMG            
            FROM hoadon_c
            
            LEFT JOIN sanpham
                ON sanpham.id = hoadon_c.id_donhang
            LEFT JOIN anhsp
                ON sanpham.id = anhsp.idsp
                
                WHERE hoadon_c.Trangthaidonhang = ?
            GROUP BY hoadon_c.id
        `;
       
        Connect.query (Trangthaidonhang , (error : string , Result : any) =>{
            if (error) return Callback (error , null);
            Callback (null , Result);
        });
    }
    


}




export default Product_Model;