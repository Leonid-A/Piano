const notes = document.getElementsByClassName("item");
const basses = document.getElementsByClassName("itemBlack");


// const note1Mid = document.getElementById("audio1");

// const note1Mid = new Audio("Notes/note1.mp3");



function playMid(event){
    const noteMid = new Audio(`Notes/${event.target.id}.mp3`)
    noteMid.play();
}


for (let i=0; i<notes.length; i++){
    notes[i].addEventListener("click", playMid);

    if (i<basses.length){
        basses[i].addEventListener("click", playMid);
    }
}

