// 
// Tùy chỉnh giao diện sáng tối 
let Name_Theme = document.querySelector(".Name_Theme");
document.querySelector(".Icon_Dar_More i").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
            Name_Theme.innerHTML = "Dark";
    } else {
        localStorage.setItem("theme", "light");
            Name_Theme.innerHTML = "Light";
    }
});


// Load Theme Default To Session 
window.addEventListener("load", () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    }
});

