const form = document.querySelector("form")
const inp1 = document.querySelector("#name")
const inp2 = document.querySelector("#email")
const user = document.querySelector(".user")
const url = document.querySelector("#url")

let userData =[
    {
        "id": 1,
        "name": "Aarav Sharma",
        "email": "aarav.sharma@example.com",
        "dob": "2003-05-14",
        "image": "https://i.pravatar.cc/300?img=12"
    },
    {
        "id": 2,
        "name": "Priya Patel",
        "email": "priya.patel@example.com",
        "dob": "2002-09-22",
        "image": "https://i.pravatar.cc/300?img=47"
    },
    {
        "id": 3,
        "name": "Rohan Mehta",
        "email": "rohan.mehta@example.com",
        "dob": "2004-01-08",
        "image": "https://i.pravatar.cc/300?img=13"
    },
    {
        "id": 4,
        "name": "Ananya Desai",
        "email": "ananya.desai@example.com",
        "dob": "2003-11-30",
        "image": "https://i.pravatar.cc/300?img=44"
    },
    {
        "id": 5,
        "name": "Kabir Verma",
        "email": "kabir.verma@example.com",
        "dob": "2002-07-17",
        "image": "https://i.pravatar.cc/300?img=15"
    }
]

const ui=()=>{
    user.innerHTML = "";
    userData.forEach( (elem) => {
        user.innerHTML += `<div class="user_card">
        <div class="img_box">
        <img src=${elem.image}; 
        alt="image is loading">
        </div>
        <div class="txt">
        <h3>Name:${elem.name}</h3>
        <p>Email:${elem.email}</p>
        </div>
        </div>`
    });
}
    
ui();

form.addEventListener("submit",(events) => {
    events.preventDefault();
    let name = inp1.value; 
    let email = inp2.value;
    let image = url.value;

if(name.trim() === "" || email.trim() === "" || image.trim() === "") return;

userData.push({
    name,
    email,
    image,
});

ui()

    form.reset();
});
