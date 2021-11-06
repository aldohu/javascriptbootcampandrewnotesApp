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

const filters = {
    searchText: ""
} 

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(e) {
       return  e.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    const noteDiv =  document.querySelector("#notes");
    
    noteDiv.innerHTML = "";
    filteredNotes.forEach(function(e  ) {
      
        const p = document.createElement("p");
        p.textContent = e.title;
        noteDiv.append(p);
    })
}

renderNotes(notes,filters);

const button = document.querySelector("#create-note");

button.addEventListener("click",function(e){
    e.target.textContent = "The button was clicked"
})

const buttons = document.querySelector("#delete-all-notes");

buttons.addEventListener("click",function(e){
    document.querySelectorAll(".note").forEach(e=> e.remove())
})


document.querySelector("#search-text").addEventListener("input",function(e){
   filters.searchText =e.target.value;
   renderNotes(notes, filters)
})


document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    console.log(e.target.elements.firstName.value);
    e.target.elements.firstName.value = "";
})