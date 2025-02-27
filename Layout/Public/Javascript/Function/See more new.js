

let Condition_See_More = false;
let Height_Default = 0;

class See_More_New {
    constructor (
        _Conten_Text_Button,
        _Height_See_More,

    ){
        this._Conten_Text_Button = _Conten_Text_Button;
        this._Height_See_More = _Height_See_More;
    }
    

    Condition_See_More_New () {
        Condition_See_More  = Condition_See_More ? false : true;
        Condition_See_More  = Condition_See_More ? true : false;

        if (Condition_See_More == true){
            Height_Default = this._Height_See_More.offsetHeight;
                this._Conten_Text_Button.innerHTML = 'Thu gọn';
                    this._Height_See_More.style.height = "auto";
        }

        if (Condition_See_More == false ){
            this._Conten_Text_Button.innerHTML = "Xem Thêm";
                this._Height_See_More.style.height = Height_Default + 'px';
        }
    }
}


