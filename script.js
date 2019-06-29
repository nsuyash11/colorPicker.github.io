//alert("Connected...!")

window.addEventListener('load', loadActions);
function loadActions() {
    easy();
    lis[2].classList.add("on");
    lis[2].childNodes[0].style.color = "white";
}


var lis = document.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function () {
        this.classList.add("highlightNav");
    });
    lis[i].addEventListener("mouseout", function () {
        this.classList.remove("highlightNav");
    });
}
for (let i = 2; i <= 3; i++) {
    lis[i].addEventListener("click", function () {
        this.classList.add("on");
        this.childNodes[0].style.color = "white";
        for (let i = 0; i < lis.length; i++) {
            if (lis[i] === this) {
                continue;
            }
            lis[i].classList.remove("on");
            lis[i].childNodes[0].style.color = "black";
        }
    });
}


var red = Math.floor(Math.random() * 255);
var green = Math.floor(Math.random() * 255);
var blue = Math.floor(Math.random() * 255);

var redDisp = document.querySelector("#redVal");
var greenDisp = document.querySelector("#greenVal");
var blueDisp = document.querySelector("#blueVal");

function headDisp() {
    redDisp.textContent = red;
    greenDisp.textContent = green;
    blueDisp.textContent = blue;
}

var redArr = [];
var greenArr = [];
var blueArr = [];

var trueplace;

var squares = document.querySelectorAll(".square");
function giveColor() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "rgb(" + redArr[i] + ", " + greenArr[i] + ", " + blueArr[i] + ")";
    }
    
    trueplace = Math.floor(Math.random() * 6);
    squares[trueplace].style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    console.log(trueplace);
}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function () {
        this.classList.remove("square");
        this.classList.add("squareHighlight");
    });
    squares[i].addEventListener("mouseout", function () {
        this.classList.add("square");
        this.classList.remove("squareHighlight");
    });
    squares[i].addEventListener("click", function () {
        this.classList.add("squareClicked");

        if(i === trueplace){
            alert("Correct...!");
        }
        else{
            alert("Wrong... Try Again!");
        }

        squares[i].classList.remove("squareClicked");
    }
)};


var newColor = document.querySelector("#newColor");
newColor.addEventListener("click", function () {
    console.log("NEW COLOR OPTIONS")
    shuffle(redArr);
    shuffle(greenArr);
    shuffle(blueArr);
    giveColor();
});

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function hard() {
    redArr = [];
    greenArr = [];
    blueArr = [];
    for (let i = 0; i < 6; i++) {
        redArr.push(Math.floor(red * Math.random()));
    }

    for (let i = 0; i < 6; i++) {
        greenArr.push(Math.floor(green * Math.random()));
    }

    for (let i = 0; i < 6; i++) {
        blueArr.push(Math.floor(blue * Math.random()));
    }

    easyLink.disabled = false;
    hardLink.disabled = true;
    headDisp();
    giveColor();
}

function easy() {
    console.log("Easy Game");
    redArr = [0, 51, 102, 153, 204, 255];
    greenArr = [0, 51, 102, 153, 204, 255];
    blueArr = [0, 51, 102, 153, 204, 255];

    shuffle(redArr);
    shuffle(greenArr);
    shuffle(blueArr);

    easyLink.disabled = false;
    hardLink.disabled = true;
    headDisp();
    giveColor();
}

var easyLink = document.querySelector("#easy");
easyLink.addEventListener("click", easy);

var hardLink = document.querySelector("#hard");
hardLink.addEventListener("click", hard);


var newGame = document.querySelector("#newGame");
newGame.addEventListener("click", function () {
    console.log("New Game");

    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);

    giveColor();
    headDisp();

    console.log(red);
    console.log(green);
    console.log(blue);
});