const btnTop=document.getElementById("toTop")
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTop.classList.add("show");
    } else {
        btnTop.classList.remove("show");
    }
});
btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const popup=document.getElementById("popup");
const closePopup=document.getElementById("tutup");
const form = document.querySelector(".hub");
form.addEventListener("submit",function (e){
    e.preventDefault();
    popup.classList.add("show");
    form.reset();
});
closePopup.addEventListener("click",function(){
    popup.classList.remove("show");
});
const menuLinks=document.querySelectorAll(".navi a");
menuLinks.forEach(link =>{
    link.addEventListener("click",function(){
        menuLinks.forEach(item=>item.classList.remove("active"));
        this.classList.add("active");
    });
});