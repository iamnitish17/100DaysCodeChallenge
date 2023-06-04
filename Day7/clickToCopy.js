var data = document.getElementById("txt");
var btn = document.getElementById("btn");
var customAlert = document.getElementById("custom-alert");

btn.addEventListener("click",()=>{
    data.select();
    document.execCommand("copy");
    customAlert.style.transform = "translateX(0)";
    // to send back the data
    setTimeout( ()=>{
        customAlert.style.transform = "translateX(calc(100% + 10px))";
    },2000);
});