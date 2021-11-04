// DOM document object model
// query and remove
/*const para = document.querySelector("p");
para.remove();*/


const ps = document.querySelectorAll("p")

ps.forEach((e)=> {
    e.textContent = "Hello World"
    //console.log(e.textContent);
})

