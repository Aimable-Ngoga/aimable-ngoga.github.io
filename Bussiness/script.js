let btn = document.querySelectorAll(".button-opt");
let popup = document.querySelector(".popup");
let newgameBtn = document.getElementById(".new-game");
let restartBtn= document.getElementById(".restart");
let message = document.getElementById(".message");

let winning = [
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,1,2],
];

let xTurn = true;
let count = 0;

const disableButtons = () => {
    btn.forEach((element) => (element.disabled = true));
    popup.classList.remove("hide");
};

const enableButtons = () => {
    btn.foreach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    popup.classList.add("hide");
};
const winfun = (letter) => {
    disableButtons();
    if (letter == "X") {
        message.innerHTML = "'x' Wins";
        message.stysle.color = "#ED3D3D"
    }
    else {
        message.innerHTML = "'o' Wins";
        message.style.color = "#3F66Da"
    }
};

const drawfan = () => {
    disableButtons();
    message.innerHTML = "Draw";
};

newgameBtn.addEventListener("click", () => {
    count = o;
    enableButtons;
});

restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons;
});

const winnercheck = () => {
    for (let i of winning) {
        let [element1, element2, element3] = [
            btn[i[0]].innerText,
            btn[i[1]].innerText,
            btn[i[2]].innerText,
        ];

        if (element1 != "" && (element2 != "") & (element3 != "")) {
            if (element1 == element2 && element2 == element3) {
                winfun(element);
            }
        }
    }
};

btn.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            // Display x
            element.innerText = "x";
            element.disabled = true;
            message.style.color = "#ED3E3E"
            
        }
        else {
            xTurn = true;
            // Display 0    
            element.innerText = "0";
            element.disabled = true;
            message.style.color = "#3F66Da"
        }
    });
});