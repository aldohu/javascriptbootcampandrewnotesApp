// DOM document object model
// query and remove
/*const para = document.querySelector("p");
para.remove();*/
const notes = [{
    title: "my next trip",
    body: "I would like to go to Spain"
},
{
    title: "Habbits to work on",
    body: "Exercise. Eating a bit better"
},
{
    title: "office modification",
    body: "Get a new seat"
},]

const ps = document.querySelectorAll("p")

ps.forEach((e)=> {
    e.textContent = "Hello World"
    //console.log(e.textContent);
})


const newParagraph = document.createElement("p");
newParagraph.textContent = "This is new element from JS";


document.body.appendChild(newParagraph); 
