
const redRadio = document.getElementById("red-radio");
const greenRadio = document.getElementById("green-radio");
const yellowRadio = document.getElementById("yellow-radio");
const pinkRadio = document.getElementById("pink-radio");



const clicked = (e)=>{
    e.target.classList.toggle("radio-selected");
    console.log("clicked");
}

redRadio.addEventListener("click", e=>{
    e.preventDefault();
    clicked(e);
    
});

greenRadio.addEventListener("click", e=>{
    e.preventDefault();
    clicked(e);
    
});

yellowRadio.addEventListener("click", e=>{
    e.preventDefault();
    clicked(e);
    
});

pinkRadio.addEventListener("click", e=>{
    e.preventDefault();
    clicked(e);
});
