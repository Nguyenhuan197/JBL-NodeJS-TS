
import { error } from 'console';
import Connect from '../SQL/Db';

class USER_Model {
    View_API = (Callback : any) => {
        let QUERY_Data : string =  `
            SELECT nguoidung.id AS ID,
            nguoidung.Ten AS Name,
            nguoidung.Quen AS Power,
            nguoidung.IMG AS IMG,
            nguoidung.SĐT AS SDT,
            nguoidung.Email AS Email,
            nguoidung.Trangthaitaikhoan AS Status_User
                FROM nguoidung
        `;

        Connect.query (QUERY_Data , (error : string , Result : any) => {
            if (error) return Callback (error , null);
            Callback (null , Result);
        });
    }


    Upload_Power = (Power_Edit : number , ID_EDIT : number , Callback : any ) => {
        let QUERY_Edit : string = `
            UPDATE nguoidung SET	
	        nguoidung.Quen = ?
    	        WHERE nguoidung.id = ?
        `;

        Connect.query (QUERY_Edit , [Power_Edit , ID_EDIT] , (error : string , Result : any) => {
            if (error) return Callback (error , null);
            Callback (null , Result);
        });
    }

    Delete_Power = (Power_Delete : number , Callback : any ) => {
        let QUERY_Delete : string = `DELETE nguoidung FROM nguoidung WHERE nguoidung.id = ?`;
        Connect.query (QUERY_Delete , [Power_Delete] , (error : string , Result : any) => {
            if (error) return Callback (error , null);
            Callback (null , Result);
        });
    }
    

}

export default USER_Model;