const getSavedNotes = function(notes){
    const notesJSON = localStorage.getItem("notes");

    if(notesJSON !== null){
    return JSON.parse(notesJSON);
}else {
    return [];
}

}
//Generate the dom structure for a note

const generateNoteDOM = function (note) {
    
    const noteEl = document.createElement('div');
    const textEl = document.createElement("span");
    const button = document.createElement("button");
   //setup the remove ntoe button

   
    noteEl.append(button);
    button.textContent = "x";

    //set note title text
    if(note.title.length> 0) {
        textEl.textContent = note.title;   
    }else {
        textEl.textContent= "Unnamed note"
    }
   
    noteEl.append(textEl)
    return noteEl;
}
//Render applicatin notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function (note) {
       const noteEl = generateNoteDOM(note);
    document.querySelector('#notes').appendChild(noteEl);
})
}