
let Check_Session = sessionStorage.setItem ('Condition_Filter' , undefined);
const Data_Session_Storage = (Value_Up_Session) => {
    if (Check_Session == undefined || Check_Session != ''){
        sessionStorage.setItem ('Condition_Filter' , Value_Up_Session);
    }

    return Value_Up_Session;
} 



let Check_Status_Product_Category = JSON.parse (
    sessionStorage.getItem (
        "Status_Check_Product_Category" 
    )
) || [];       


const Up_Status_SessionStorage = (Value_Up_Session) => {
    if (Check_Status_Product_Category.length == 2){
        Check_Status_Product_Category.shift();
    }
   
    Check_Status_Product_Category.push(
        [Value_Up_Session]   
    );

    sessionStorage.setItem ("Status_Check_Product_Category" , JSON.stringify(Check_Status_Product_Category));

    let KQ = JSON.parse (sessionStorage.getItem ("Status_Check_Product_Category"));
    console.log (KQ);
}


