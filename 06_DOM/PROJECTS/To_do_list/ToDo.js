const inp = document.querySelector("input")
const btn = document.querySelector("#add") 
const todo= document.querySelector(".TO_DO_LIST")


btn.addEventListener('click',()=>{
    const value = inp.value;

    if(value.trim() ==="") return;


        todo.innerHTML +=`<div class="LIST">
                <H3>${value}</H3>
                <div>
                    <button class="btn edit">Edit</button>
                    <button class="btn delete">Delete</button>
                </div>  
            </div>`;
        inp.value ="";
});