const keyInfo = {
    KeyA:  "note1",
    KeyS: "note2",
    KeyD: "note3",
    KeyF: "note4",
    KeyG: "note5",
    KeyH: "note6",
    KeyJ: "note7",
    KeyW: "bass1",
    KeyE: "bass2",
    KeyT: "bass3",
    KeyY: "bass4",
    KeyU: "bass5"
};

(function addTilesEVentListeners(){
    const notes = document.getElementsByClassName("item");
    const basses = document.getElementsByClassName("itemBlack");
    document.addEventListener("keydown", playWithKeyboard);
    document.addEventListener("keyup", removeClass);

    for ( let i=0; i < notes.length; i++ ){
        notes[i].addEventListener("mousedown", getId);
        notes[i].addEventListener("mouseup", removeClass);

        if ( i < basses.length ){
            basses[i].addEventListener("mousedown", getId);
            basses[i].addEventListener("mouseup", removeClass);
        }
    }
})();

function playMid(id){
    const noteMid = new Audio(`Notes/${id}.mp3`)
    noteMid.play();
    pressEfect(id);
}

function pressEfect(id){
    document.getElementById(id).classList.add("active");
}

function getId(event) {
    playMid(event.target.id);
}

function removeClass(event){
    let item;
    if ( event.type === "mouseup" ){
        item = event.target.id;
    } else {
        item = keyInfo[event.code];
    }

    if (item){
        document.getElementById(item).classList.remove("active");
    }
}

function playWithKeyboard(event){
    const item = keyInfo[event.code];
    if (item){
        playMid(item)
    }
}

