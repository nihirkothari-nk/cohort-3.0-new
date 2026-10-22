const creatBtn = document.querySelector("#creatBtn")
const formdiv = document.querySelector(".form")
const closeBtn = document.querySelector("#close")
const form = document.querySelector("form")
const products = document.querySelector(".products")


creatBtn.addEventListener("click",()=>{
    formdiv.style.display = "flex";
});

const productsArr =[];
let updateIndex = null;

const ui = ()=>{
    products.innerHTML="";
productsArr.forEach((elem,index)=>{
    products.innerHTML += `<div class="product_card">
            <div class="img">
                <img src="${elem.image} " 
                alt="image is loading">
            </div>
            <div class="text">
                <h3>${elem.productName}</h3>
                <p>${elem.price}</p> 
                <P>${elem.discription}</P>
            </div>
            <div class="btns">
                <button onclick = "updateProduct('${elem.productName}')" id="ubd">Update</button>
                <button onclick = "deleteProduct(${index})"id="del">Delete</button>
            </div>
        </div>`
})
};


closeBtn.addEventListener("click",()=>{
    formdiv.style.display = "none"
})

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let productName = event.target[0].value;
    let discription = event.target[1].value;
    let price = event.target[2].value;
    let image = event.target[3].value;

if( productName.trim() === ""|| 
    discription.trim() === "" || 
    price.trim() ===""|| 
    image.trim()==="") {
    alert("Please fill all the details")
    return;
}


let obj = {
    productName,
    discription,
    price,
    image
}


if(updateIndex != null){
    productsArr[updateIndex]=obj;
    updateIndex = null;
}else{
    productsArr.push(obj);
}


ui();

form.reset()

formdiv.style.display = "none"

});


const updateProduct = (name)=>{
    formdiv.style.display = "flex";
    let product= productsArr.find((elem) => elem.productName === name)
    updateIndex = productsArr.findIndex((elem) => elem.productName === name)

    form[0].value = product.productName
    form[1].value = product.discription
    form[2].value = product.price
    form[3].value = product.image
};

const deleteProduct = (index) => {
    productsArr.splice(index, 1);
    ui();
};