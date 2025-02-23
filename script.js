let frame = 0;
let state = 'IDLE';
let left = 300;
let leftArrow = false;
let rightArrow = false;
let attacking = false; // Gibt an, ob der Angriff gerade stattfindet


setInterval(moveCharacter, 75);
setInterval(updateGame, 1000 / 60);
document.onkeydown = checkKey;
document.onkeyup = unCheckKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
        // left arrow
        leftArrow = true;
        setState('WALK');
    }
    else if (e.keyCode == '39') {
        // right arrow
        rightArrow = true;
        setState('WALK');
    }
    if (e.keyCode == '68') { // 'd' taste 
        attacking = true;
    }  
}


function unCheckKey(e) {
    e = e || window.event;

    if (e.keyCode == '37') {
        leftArrow = false;
    }
    else if (e.keyCode == '39') {
        rightArrow = false;
    }
}



function updateGame() {
    currentBackground.style.objectPosition = `${-left}px`;
    if(leftArrow) {
        left -= 5;
    }
    if(rightArrow) {
        left += 5;
    }

    if(attacking) {
        setState('ATTACK');
    }
    else if(leftArrow || rightArrow) {
        setState('WALK');
    } else {
        setState('IDLE');
    }
}

function moveCharacter() {
    pirate.src = `img/2/2_entity_000_${state}_00${frame}.png`;
    frame++;
    if (leftArrow) {
        pirate.style.transform = "scaleX(-1)";
    }

    if (rightArrow) {
        pirate.style.transform = "scaleX(1)";
    }
  

    if (frame == 7) {
       attacking = false;
       frame = 0; 
    }
}


function setState(newState) {
    if (state !== newState) {
        frame = 0;
        state = newState;
    }
}