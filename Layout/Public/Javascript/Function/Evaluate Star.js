
class Load_Star {
    constructor (
        _Value_Star,
        _Fill_Color_Star
    ){
        this._Value_Star = _Value_Star;
        this._Fill_Color_Star = _Fill_Color_Star;
    }

    Load_Evaluate = () => {
        for (let i = 0 ; i < 5 ; i++){
            if (this._Value_Star >= i ){
                this._Fill_Color_Star[i].style.fill = "gold";
                    continue;
            }

            this._Fill_Color_Star[i].style.fill = "rgb(226,226,226)";
        }
    }
}


const Evaluate_Star =  (Value_Star) => {
    const Value = Value_Star.getAttribute("Soluong_Sao");
    let Fill_Color_Star = document.querySelectorAll(".Sao svg");

        const Load = new Load_Star (
            Value,
            Fill_Color_Star
        );
    Load.Load_Evaluate();
}




