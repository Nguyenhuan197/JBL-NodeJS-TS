

export const Heder = () => {
    window.onscroll = function() {myFunction()};

    var header = document.getElementById("PT_an_hien");
        var sticky = header.offsetTop;      // lưu trũ thuộc tính cố định

        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }  
}


export const Thanh_Top = () => {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop()){
                $('#Up_Top').fadeIn();
            }else {
                $('#Up_Top').fadeOut();
            }
        })
    });


    $('#Up_Top').click(function(){
        $('html,body').animate ({
            scrollTop: 0
        },1000);
    });
}


export const Load_Menu = () => {
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


    
    
    document.addEventListener("DOMContentLoaded", function() {
        class Menu {
            constructor (_Display_Body_Menu, _Main_Body_Website, _Icon_Check_OFF, _Icon_Check_ON) {
                this._Display_Body_Menu  = _Display_Body_Menu;
                this._Main_Body_Website = _Main_Body_Website;
                this._Icon_Check_OFF = _Icon_Check_OFF;
                this._Icon_Check_ON = _Icon_Check_ON;
            }
    
            Operation_Menu_ON (){
                this._Display_Body_Menu.style.display = "block";
                    this._Main_Body_Website.style.filter = "brightness(50%)";
                        this._Icon_Check_OFF = style.display = "block";
                            this._Icon_Check_ON = style.display = "none";   
            }
    
            Operation_Menu_OFF (){
                this._Display_Body_Menu.style.display = "none";
                    this._Main_Body_Website.style.filter = "brightness(100%)";
                        this._Icon_Check_OFF.style.display = "none";
                            this._Icon_Check_ON.style.display = "block";
            }
        }
    
        let Display_Body_Menu = document.querySelector(".Thanh_Menu_Man_Hinh_Nho");
        let Main_Body_Website = document.querySelector("main");
        let Icon_Check_OFF = document.getElementById("Home");
        let Icon_Check_ON = document.getElementById("I_Con_Doc");
    
    
        var menu = new Menu(
            Display_Body_Menu,
            Main_Body_Website,
            Icon_Check_OFF,
            Icon_Check_ON
        );
    

        let Check_Menu = false;
        document.querySelector(".I_Con_Thanh_Menu").addEventListener('click', () => {
            Check_Menu = !Check_Menu;
    
            if (Check_Menu) {
                menu.Operation_Menu_ON();  
            } else {
                menu.Operation_Menu_OFF();  
            }
        });
    });
    



}






    // let Check_Menu = false;

    // document.querySelector(".I_Con_Thanh_Menu").addEventListener ('click', () => {
    //     Check_Menu = !Check_Menu;

    //         if (Check_Menu == true){
    //             document.querySelector(".Thanh_Menu_Man_Hinh_Nho").style.display = "none";
    //                 document.querySelector("main").style.filter = "brightness(100%)";
    //                     document.getElementById("Home").style.display = "none";
    //                         document.getElementById("I_Con_Doc").style.display = "block";
    //         }

    //         else {
    //                         document.querySelector(".Thanh_Menu_Man_Hinh_Nho").style.display = "block";
    //                     document.querySelector("main").style.filter = "brightness(50%)";
    //                 document.getElementById("Home").style.display = "block";
    //             document.getElementById("I_Con_Doc").style.display = "none";
    //         }

    // });