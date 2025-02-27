
let Index_Slide = 0;
var Page;

class Load_Click_Slide {
    constructor (
        _Condition,                   // điều kiện nhấn

        _Expost_Slide_Product,        //  Link xuất box cha
        _Condition_Slide_Product,     // Box con
        _Count_Pruduct_Slide          // Số lượng slide
    ){
        this._Condition = _Condition; 

        this._Expost_Slide_Product = _Expost_Slide_Product;
        this._Condition_Slide_Product = _Condition_Slide_Product;
        this._Count_Pruduct_Slide = _Count_Pruduct_Slide;
    }


    Condition_Click_Slide = () => {
        if (this._Condition == 'Next_Box'){
            if (Page == undefined || Page == this._Expost_Slide_Product){
                    Index_Slide ++;
                if (Index_Slide > this._Count_Pruduct_Slide - 4){
                    Index_Slide = 0;
                }
            }
             
            else {
                Index_Slide = 0;
                    Index_Slide ++;
                if (Index_Slide > this._Count_Pruduct_Slide - 4){
                    Index_Slide = 0;
                }
            }

        }
        
        
        if (this._Condition == 'Back_Box'){
            if (Page == undefined || Page == this._Expost_Slide_Product){
                    Index_Slide --;
                if (Index_Slide < 0){
                    Index_Slide = this._Count_Pruduct_Slide - 4;
                }
            }
    
            else {
                Index_Slide = 0;
                    Index_Slide --;
                if (Index_Slide < 0){
                    Index_Slide = this._Count_Pruduct_Slide - 4;
                }
            }
        }
    
        this._Expost_Slide_Product.style.transform =  `translateX(-${this._Condition_Slide_Product * Index_Slide}px)`;
    }
}



