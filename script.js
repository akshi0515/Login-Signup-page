

const formOpenBtn = document.querySelector("#form-open")
const formOpensBtn = document.querySelector("#sform-open")
home = document.querySelector(".home")

form_container = document.querySelector(".form_container")
formCloseBtn = document.querySelector(".form_close")
signupBtn = document.querySelector("#signup")
loginBtn = document.querySelector("#login")
pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", ()=> home.classList.add("show"));
formCloseBtn.addEventListener("click", ()=>{
    home.classList.remove("show");
    form_container.classList.remove("active");

});
formOpensBtn.addEventListener("click" , ()=> {
    home.classList.add("show");
    form_container.classList.add("active");
})



signupBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    form_container.classList.add("active");
});

loginBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    form_container.classList.remove("active");
} );



pwShowHide.forEach((icon) => {
    icon.addEventListener("click", ()=> {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password"){
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye")
        }else{
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash")
        }
    });
});