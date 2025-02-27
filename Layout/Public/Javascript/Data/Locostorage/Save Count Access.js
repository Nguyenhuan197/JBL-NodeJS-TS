    
document.addEventListener("DOMContentLoaded", () => {
    let Status = localStorage.getItem ('Count_Access');

    if (Status != null || Status > 0){
        Status++ ;
            localStorage.setItem ('Count_Access' , Status);
    } else {
        localStorage.setItem ('Count_Access' , 1);
    }

  
    setTimeout(() => {
        let Print_Count = localStorage.getItem ('Count_Access');
            document.querySelector(".Soluongtruycap").innerHTML = 'Số Lượng Truy Cập : ' + Print_Count;
    }, 1000);

});
 