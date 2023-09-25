const dragEle = document.getElementById("drag");
const dropEle = document.getElementById("drop");

// dragEle.addEventListener("dragstart",()=>{
//     console.log("Dragging start");
// });

// dragEle.addEventListener("dragend" ,()=>{
//     console.log("Dragging ends");
// });

// dropEle.addEventListener("dragenter" , ()=>{
//     console.log("drag entered");
// });

// dropEle.addEventListener("dragleave" , ()=>{
//     console.log("drag leaves");
// });

// dropEle.addEventListener("dragover",(event)=>{
//     event.preventDefault();
    // console.log("dragging over");
// });

// dropEle.addEventListener("drop" ,()=>{
//     dropEle.appendChild(dragEle);
    // console.log("dropped");
// });

const plus = document.getElementsByClassName("plus");
const sec = document.getElementById("second");

function createTask(event){
    const parent = event.target.parentNode; //first
    const toggle = parent.nextElementSibling; //second
    
    toggle.className = "show";
}
for(let i=0;i<plus.length;i++){
    plus[i].addEventListener("click", createTask);
}

const add = document.getElementsByClassName("add");
let idCount = 1;

function deleteContent(buttonRef){
    const parent = buttonRef.parentNode;
    parent.remove();
}

function handleInput(event){
    const target = event.target.previousElementSibling;
    const content = target.value; //input value
    const parentSub = event.target.parentNode; //second
    const parent = parentSub.parentNode; //drag or drop div

    const container = document.createElement("div");
    container.className = "cards";
    container.id = idCount;
    container.draggable = "true";
    container.innerHTML = `
        <b>${content}</b>
        <button class="deleteCard" onclick="deleteContent(this)">Delete</button> `;

    parent.appendChild(container);
    target.value = "";
    parentSub.className = "hide";
    idCount++;
}

for(let i=0;i<add.length;i++){
    add[i].addEventListener("click",handleInput);
}
