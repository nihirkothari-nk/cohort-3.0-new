const blb = document.querySelector(".BULB")
const btn = document.querySelector("button")


// METHOD-(very basic)
// let light = true;
// btn.addEventListener("click", function () {
//     if(light){
//         blb.style.backgroundColor = "yellow";
//         btn.textContent = "OFF";
//         light=false;
//     }else {
//         blb.style.backgroundColor = "transparent";
//         btn.textContent = "ON";
//         light=true;
//     }
// });


// METHOD-II
btn.addEventListener("click", function () {
if(blb.classList.toggle("lightupp")){
    btn.textContent = "OFF";
}else{
    btn.textContent = "ON";
}
});