

class Load_Time_Sale {
    constructor (
        _Hause, 
        _Minutes, 
        _URL_Outpush_Time
    ){
        this._Hause = _Hause;
        this._Minutes  = _Minutes;
        this._URL_Outpush_Time = _URL_Outpush_Time;
    }

    Time_Sale  = () => {
        if (this._Hause !== 0 || this._Minutes !== 0){
            let _1h = this._Hause * 60 * 60 * 1000;
            let _1p = this._Minutes * 60 * 1000
                let Sum_Mlgiay = _1h + _1p;
    
            const Load_Time = () => {
                let Xuat_Haurs   = Math.floor ((Sum_Mlgiay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let Xuat_Minutes = Math.floor ((Sum_Mlgiay % (1000 * 60 * 60 )) / (1000 * 60));
                let Xuat_Seconds = Math.floor ((Sum_Mlgiay % (1000 * 60)) / 1000);
    
                    this._URL_Outpush_Time[0].innerHTML = Xuat_Haurs.toString().padStart(2, '0');
                    this._URL_Outpush_Time[1].innerHTML = Xuat_Minutes.toString().padStart(2 , '0');
                    this._URL_Outpush_Time[2].innerHTML = Xuat_Seconds.toString().padStart(2 ,'0');
    
                Sum_Mlgiay -= 1000;
            }
    
            setInterval(() => {
                Load_Time();
            }, 1000);
        }
    }





}




