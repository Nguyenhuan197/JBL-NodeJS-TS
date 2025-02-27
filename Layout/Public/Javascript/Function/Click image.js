

let index_Image = 0;

class Load_Image_Click {
    constructor (
        _Condition,
        _Inpush_URL_Image_Product,
        _Export_Image_Product
    ){
        this._Condition = _Condition;
        this._Inpush_URL_Image_Product = _Inpush_URL_Image_Product;
        this._Export_Image_Product = _Export_Image_Product;
    }

    Condition_Image_Click = () => {
        if (this._Condition == 'Next_Box'){
            index_Image ++;

            if (index_Image >= this._Inpush_URL_Image_Product.length){
                index_Image = 0;
            }
        }

        if (this._Condition == 'Back_Box'){
            index_Image --;

            if (index_Image < 0){
                index_Image = this._Inpush_URL_Image_Product.length -1;
            }
        }

        this._Export_Image_Product.src = this._Inpush_URL_Image_Product[index_Image].src;

    }

}