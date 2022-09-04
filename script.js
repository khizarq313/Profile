const htmlBody = document.querySelector("body");

const themeBtn = document.querySelector(".theme_btn");

const btnSunPic = document.querySelector(".light");

const btnMoonPic = document.querySelector(".dark");

const headingtxt = document.querySelector(".heading");

const embaddedLinkA = document.querySelector("a");

const qualifications = document.querySelector(".qualifications")

const changeTheme = () =>{
    htmlBody.classList.toggle("light_theme");
    btnSunPic.classList.toggle("invisible");
    btnMoonPic.classList.toggle("invisible");
    headingtxt.classList.toggle("headind_lighttheme");
    embaddedLinkA.classList.toggle("light_a");
    qualifications.classList.toggle("light-qualifications")
}

themeBtn.addEventListener("click", changeTheme);