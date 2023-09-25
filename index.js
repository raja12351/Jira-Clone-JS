// const dragEle = document.getElementById("drag");

// dragEle.addEventListener("dragstart",()=>{
//     console.log("Dragging start");
// });

// dragEle.addEventListener("dragend" ,()=>{
//     console.log("Dragging ends");
// });

// dropEle.addEventListener("dragleave" , ()=>{
//     console.log("drag leaves");
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
function dragStart(event){
    const cardId = event.target.id;
    event.dataTransfer.setData("id",cardId);
    console.log("dragging with id " + cardId);
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
    container.addEventListener("dragstart",dragStart);

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

// Drag and drop handling

const dropContainer = document.getElementsByClassName("dropContainer");

function dragOverEvents(event){
    event.preventDefault();
}
function dropCards(event){
    const cardId = event.dataTransfer.getData("id");

    const element = document.getElementById(cardId);
    event.target.appendChild(element);

    console.log("dropped"); 
}
for(let i=0;i<dropContainer.length;i++){
    dropContainer[i].addEventListener("dragover",dragOverEvents);
    dropContainer[i].addEventListener("drop",dropCards);
}

// implementing extra blocks
const extra = document.getElementById("extra");

function addExtraBlock(event){
    const previousChild = event.target; // extra button
    const parent = event.target.parentNode; // card Container

    const newCard = document.createElement("div");
    newCard.id = "drop";
    newCard.className = "dropContainer";
    newCard.innerHTML = `
    <div class="first">
        <p class="category">Progress</p>
        <p class="plus">+</p>
    </div>
    <div id="second" class="hide">
        <input type="text" class="input" placeholder="Write here">
        <button class="add">Add</button>
    </div>`;

    parent.insertBefore(newCard, previousChild);
}
extra.addEventListener("click",addExtraBlock);
