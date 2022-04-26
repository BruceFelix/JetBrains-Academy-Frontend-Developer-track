document.addEventListener("keydown", function(event) {
    if (event.code == "KeyA"){
        let audio = document.createElement("AUDIO");
        audio.src = "A.mp3";
        audio.play();
    }
    else if (event.code == "KeyS"){
        let audio = document.createElement("AUDIO");
        audio.src = "S.mp3";
        audio.play();
    }
    else if (event.code == "KeyD"){
        let audio = document.createElement("AUDIO");
        audio.src = "D.mp3";
        audio.play();
    }
    else if (event.code == "KeyF"){
        let audio = document.createElement("AUDIO");
        audio.src = "F.mp3";
        audio.play();
    }
    else if (event.code == "KeyG"){
        let audio = document.createElement("AUDIO");
        audio.src = "G.mp3";
        audio.play();
    }
    else if (event.code == "KeyH"){
        let audio = document.createElement("AUDIO");
        audio.src = "H.mp3";
        audio.play();
    }
    else if (event.code == "KeyJ"){
        let audio = document.createElement("AUDIO");
        audio.src = "J.mp3";
        audio.play();
    }
    else if (event.code == "KeyW"){
        let audio = document.createElement("AUDIO");
        audio.src = "W.mp3";
        audio.play();
    }
    else if (event.code == "KeyE"){
        let audio = document.createElement("AUDIO");
        audio.src = "E.mp3";
        audio.play();
    }
    else if (event.code == "KeyT"){
        let audio = document.createElement("AUDIO");
        audio.src = "T.mp3";
        audio.play();
    }
    else if (event.code == "KeyY"){
        let audio = document.createElement("AUDIO");
        audio.src = "Y.mp3";
        audio.play();
    }
    else if (event.code == "KeyU"){
        let audio = document.createElement("AUDIO");
        audio.src = "U.mp3";
        audio.play();
    }
    else {
        console.log("Unbound key was pressed.")
    }
});