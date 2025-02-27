
    // Xủ lý menu thanh chức năng
    const menus = document.querySelectorAll(".sp1");
    const opentext = document.querySelectorAll(".sp2");

    menus.forEach((el) => {
        el.addEventListener("click", (e) => {
            console.log(el.nextElementSibling);
            remover();
            el.nextElementSibling.classList.toggle("active");

        })
    })

    function remover() {
        opentext.forEach((ele) => {
            ele.classList.remove("active");
        })
    }


    // chức năng Time sale

    window.onload = function(){
        document.getElementsByTagName("title")[0].innerHTML = "JBL | Tin Tức";
    }  

    setTimeout(() => {
        document.getElementsByClassName("Load_dinh")[0].style.opacity = 0;
            setTimeout(() => {
                document.getElementsByClassName("Load_dinh")[0].style.display = "none"; 
            }, 1000);
    }, 1000);




    // Xử lý ẩn hiện menu

    var IZ = 1;


    document.querySelector(".I_Con_Thanh_Menu").addEventListener ('click', function(){
        IZ++;

        if (IZ % 2){
            document.querySelector(".Thanh_Menu_Man_Hinh_Nho").style.display = "none";
                document.querySelector("main").style.filter = "brightness(100%)";
                    document.getElementById("Home").style.display = "none";
                        document.getElementById("I_Con_Doc").style.display = "block";
        }else {
                        document.querySelector(".Thanh_Menu_Man_Hinh_Nho").style.display = "block";
                    document.querySelector("main").style.filter = "brightness(50%)";
                document.getElementById("Home").style.display = "block";
            document.getElementById("I_Con_Doc").style.display = "none";
        }
    })

