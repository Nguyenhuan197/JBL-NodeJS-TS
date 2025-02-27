

class Load_Expost_Youtube {
    constructor (
        _Inpush_URL_Youtube,
        _Export_Youtube,
        _Display_Youtube
    ){
        this._Inpush_URL_Youtube = _Inpush_URL_Youtube;
        this._Export_Youtube = _Export_Youtube;
        this._Display_Youtube = _Display_Youtube;
    }

    Expost_Youtobe = () => {
        this._Export_Youtube.src = this._Inpush_URL_Youtube;
        this._Display_Youtube.style.display = "block";

        if (this._Inpush_URL_Youtube == 'EXIT' && this._Inpush_URL_Youtube.length <= 61){
           this._Display_Youtube.style.display = "none";
        }
    }

    
}


 