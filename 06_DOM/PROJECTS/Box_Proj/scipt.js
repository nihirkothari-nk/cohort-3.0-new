const main = document.querySelector("main")
const btn = document.querySelector("button")
const timer = document.querySelector("#timer")
const overlay = document.querySelector("#overlay")
const box = document.createElement("div")
const scores = document.querySelector("#score")

box.classList.add("box")


let time= 0;
let score = 0;
let interval;

const randomColor = (()=>{
    let r=Math.floor(Math.random() * 256);
    let g=Math.floor(Math.random() * 256);
    let b=Math.floor(Math.random() * 256);

    return`rgb(${r},${g},${b})`
})

const randomBox = (()=>{
        isClicked = false;
        box.style.backgroundColor = randomColor();
        main.append(box)

        let mainH = main.clientHeight - box.offsetHeight;
        let mainW = main.clientWidth - box.offsetWidth;  

        const rY = Math.random() * mainH;
        const rX = Math.random() * mainW;
        
        box.style.top =`${rY}px`;
        box.style.left =`${rX}px`;
})

btn.addEventListener("click",()=>{
    clearInterval(interval);

interval = setInterval(() => {
    randomBox();

        time += 1;
        timer.textContent = time;

    },1000);

setTimeout(() => {
    clearInterval(interval)

    overlay.style.display = "flex"

        setTimeout(()=>{
            overlay.style.display = "none"
            
            time = 0;
            score = 0;

            timer.textContent = time;
            scores.textContent = score;

            box.remove()
        },3000)

}, 10000);

})

box.addEventListener("click",()=>{
    if (isClicked === false) {
        score += 1;
        scores.textContent = score;

        isClicked = true; // Lock after first click
    }
});
