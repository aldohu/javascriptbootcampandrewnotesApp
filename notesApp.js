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


const button = document.querySelector("button");

button.addEventListener("click",function(e){
    console.log("did this work");
})