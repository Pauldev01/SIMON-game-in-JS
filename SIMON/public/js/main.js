//simon say's avec l'aide de ette video :
//https://www.youtube.com/watch?v=n_ec3eowFLQ
document.body.style.border = "none"
document.body.style.margin = "none"
document.body.style.padding = "none"
document.body.style.backgroundColor = "lightgrey"
let compTurn
let flash
let order = []
let playerOrder = []
let intervalId
let turn

//titre (h1)
let h1 = document.createElement("h1")
h1.style.textAlign = "center"
h1.style.fontFamily = "OCR A Std"
h1.innerHTML = "SIMON GAME"

//button start
let buttondiv = document.createElement('div')
buttondiv.style.display = "flex"
buttondiv.style.justifyContent = "center"
buttondiv.style.marginBottom = "2vh"

let button = document.createElement('button')
button.innerHTML = "start"
button.style.fontFamily = "OCR A Std"
button.style.backgroundColor = "black"
button.style.color = "white"
button.style.border = "red solid 2px"
button.style.borderRadius = "10px"


buttondiv.append(button)



//jeu (section)
let section = document.createElement("section")
section.style.display = "flex"
section.style.justifyContent = "center"

//base
let div1 = document.createElement("div")
div1.style.height = "25vh"
div1.style.width = "25vw"
div1.style.backgroundColor = "Red"
div1.style.borderRadius = "50px 0px 0px 50px"
div1.style.border = "black solid 3px"
let div2 = document.createElement("div")
div2.style.height = "25vh"
div2.style.width = "25vw"
div2.style.backgroundColor = "blue"
div2.style.border = "black solid 3px"
let div3 = document.createElement("div")
div3.style.height = "25vh"
div3.style.width = "25vw"
div3.style.backgroundColor = "Green"
div3.style.border = "black solid 3px"
let div4 = document.createElement("div")
div4.style.height = "25vh"
div4.style.width = "25vw"
div4.style.backgroundColor = "Yellow"
div4.style.borderRadius = "0px 50px 50px 0px"
div4.style.border = "black solid 3px"






//game
let now3 = document.createElement('span')
now3.style.fontFamily = "OCR A Std"

button.addEventListener('click', function () {
    intervalId = 0
    turn = 1
    flash = 0
    now2 = 1
    now3.innerHTML = 1
    good = true

    for (var i = 0; i < 25; i++) {
        order.push(Math.floor(Math.random() * 4) + 1)
    }
    compTurn = true
    intervalId = setInterval(simon, 800)
    // let yo = Math.floor(Math.random() * 4);
    // switch (yo){
    //     case 0:
    //         console.log("1");
    //         div1.style.backgroundColor = "salmon"
    //         break
    //     case 1:
    //         console.log("2");
    //         div2.style.backgroundColor = "cyan"
    //         break
    //     case 2:
    //         console.log("yo");
    //         div3.style.backgroundColor = "seaGreen"
    //         break
    //     case 3:
    //         console.log("4");
    //         div4.style.backgroundColor = "moccasin"
    //         break
    // }
})

function simon() {
    on = false

    if (flash == turn) {
        clearInterval(intervalId)
        compTurn = false
        clearColor()
        on = true
    }
    if (compTurn) {
        clearColor()
        setTimeout(() => {
            if (order[flash] == 1) one()
            if (order[flash] == 2) two()
            if (order[flash] == 3) three()
            if (order[flash] == 4) four()
            flash++
        }, 200)
    }
}

function one() {
    div1.style.backgroundColor = "salmon"
}

function two() {
    div2.style.backgroundColor = "cyan"
}

function three() {
    div3.style.backgroundColor = "seaGreen"
}

function four() {
    div4.style.backgroundColor = "moccasin"
}

function clearColor() {
    div1.style.backgroundColor = "Red"
    div2.style.backgroundColor = "blue"
    div3.style.backgroundColor = "Green"
    div4.style.backgroundColor = "Yellow"
}
div1.addEventListener('click', function () {
    if (on) {
        playerOrder.push(1)
        check()
        one()
        setTimeout(() => {
            clearColor()
        }, 200)
    }
})

div2.addEventListener('click', function () {
    if (on) {
        playerOrder.push(2)
        check()
        two()
        setTimeout(() => {
            clearColor()
        }, 200)
    }
})

div3.addEventListener('click', function () {
    if (on) {
        playerOrder.push(3)
        check()
        three()
        setTimeout(() => {
            clearColor()
        }, 200)
    }
})

div4.addEventListener('click', function () {
    if (on) {
        playerOrder.push(4)
        check()
        four()
        setTimeout(() => {
            clearColor()
        }, 200)
    }
})

function check() {
    //playerOrder[playerOrder.length - 1 dernier boutton sur lequel le joueur a cliqué est different de l'order de simon good sera false si il y a une erreur
if (playerOrder[playerOrder.length - 1] !==order[playerOrder.length -1]){
    good = false

now3.innerHTML = "FAUX"
console.log("blabla");
setTimeout(() => {
    now3.innerHTML = "appuiez sur start pour relancer"
    clearColor()

    playerOrder.pop()

    //retourne au debut au moment du clic
    intervalId = 0
    turn = 1
    flash = 0
    now2 = 1
    good = true

    for (var i = 0; i < 25; i++) {
        order.push(Math.floor(Math.random() * 4) + 1)
    }
    compTurn = true
    intervalId = setInterval(simon, 800)
    //
},800)
}
//if le player a bon
if (turn == playerOrder.length && good){
    turn++;
    console.log("bla");
    playerOrder = []
    compTurn = true
    flash = 0
    now3.innerHTML = turn
    intervalId = setInterval(simon, 800)
}


}



section.append(div1, div2, div3, div4)
//score

let score = document.createElement('div')
score.style.display = "flex"
score.style.justifyContent = "center"
score.style.marginTop = "10vh"

let now = document.createElement('span')
now.style.fontFamily = "OCR A Std"
now.innerHTML = "tour actuel:"


score.append(now,now3)

document.body.append(h1, buttondiv, section, score)