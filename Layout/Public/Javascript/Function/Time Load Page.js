

var Element = document.getElementsByClassName("Load_dinh")[0];
    if (Element){
        Element.style.opacity = 0; 
    }


window.onload = () => {
    let LoadTime = performance.now() / 1000; // đổi từ ms sang giây

        if (LoadTime > (60 * 1000)){
            let Display_Error_404 = document.querySelector(".Error_404 img");

                if (Display_Error_404){
                    Display_Error_404.style.display = "block"
                }

        } else {
            const Load_Page_ = new Load_Page (true);
            Load_Page_ .Load_Wait_Page ();
        }

    console.log(`Thời gian tải trang là: ${LoadTime.toFixed(2)} giây`);
};
 

class Load_Page {
    constructor (_Condition){
        this._Condition = _Condition;
    }

    Load_Wait_Page = () => {
        if (this._Condition === true){
            if (Element){
                Element.style.display = "none";
            }
        }
    }

}


