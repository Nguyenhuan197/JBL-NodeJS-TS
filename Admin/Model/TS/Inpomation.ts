  
import { error } from 'console';
import Connect from '../SQL/Db';
import { callbackify } from 'util';

class Order_Model {
      View_Data_Order = (Callback : any) => {
        let Query_API_Product = `SELECT  hoadon_c.id AS ID,
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
                
            GROUP BY hoadon_c.id
        `;
  
        Connect.query(Query_API_Product , (error : string , Result : any) => {
            if (error){
                Callback (error , null);
            } else {
                Callback (null , Result);
            }
        });
    }


    Upload = (ID_Upload : number , Trangthai : number , Callback : any ) => {
        let Query_Upload : string = `UPDATE hoadon_c 
            SET hoadon_c.Trangthaidonhang = ?
                WHERE hoadon_c.id = ?
        `;

        Connect.query (Query_Upload , [Trangthai ,ID_Upload] , (error : string , Result : any) => {
            if (error)  return Callback (error , null);
            Callback (null , Result);
        });
    }

    
  
}


export default Order_Model;
