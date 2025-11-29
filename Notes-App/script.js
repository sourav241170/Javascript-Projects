const notesContainer=document.querySelector(".container");
const createBtn= document.querySelector(".btn");
let notes= document.querySelectorAll(".input-box");

// Check local storage for any notes
function showNotes(){
    notesContainer.innerHTML= localStorage.getItem("note");
}
showNotes();

// Update/save data in the local storage with the name "notes"
function updateStorage(){
    localStorage.setItem("note", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox= document.createElement("p");
    let img= document.createElement("img");
    inputBox.className= "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src= "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName=== "P"){
        notes= document.querySelectorAll(".input-box");
        notes.forEach(nt=> {
            nt.onkeyup= function(){
                updateStorage();
            }
        })
    }
})
document.addEventListener("keydown", event =>{
    if(event.key=== "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
