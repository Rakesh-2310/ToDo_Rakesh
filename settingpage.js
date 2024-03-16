const settingPage = document.getElementById("settingpage");
const settingButton = document.getElementById("setting-on-bn");
let count = 0;
 function settingon(){
    if (count === 0){
        settingButton.style.transform = "rotate(-180deg)"; 
        settingButton.style.transition = "0.5s";
        settingPage.style.display = "block";
        count =1;
    }
    else {
        settingButton.style.transform = "rotate(45deg)"; 
        settingButton.style.transition = "0.5s";
        settingPage.style.display = "none";
        count =0;
    }
 }