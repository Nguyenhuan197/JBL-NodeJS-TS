

// Load thông báo người dùng
class Load_Notification {
    constructor (
        _Value,
        _Time    
    ){
        this._Value = _Value; 
        this._Time = _Time;
    }

    ADD_Notification = () => {
        let Display_Nofication = document.querySelector(".Features_Notification");
    
        Display_Nofication.classList.add("Features_Notification_On");
        Display_Nofication.innerHTML = this._Value;

        setTimeout(() => {
            Display_Nofication.classList.remove("Features_Notification_On");
        }, this._Time);

    }

 }   
