// ДЛЯ ПОДУМАТЬ
// снять события с кнопок после достижения максимальной комбинации
// кнопка сброс или при повторном нажатии снимать выделение
// генерация случайных чисел или случайная выборка из массива чисел

const cardNumber = document.getElementById("cardNumber");
const btnCard = document.getElementById("btnCard");
const lotoDraw = document.getElementById("loto-draw");
const printNumbersEntered = document.getElementById("printNumbersEntered");
const printWinnerNumbers = document.getElementById("printWinnerNumbers");
const arrBtn = [];
const userNumbers = [];
// const winnerNumbers = [1, 2, 3, 4, 5];
const winnerNumbers = [];
let userWins = 0;
let userLos = 0;
const moneyWins = {
    0: "You los ((",
    1: "You wins 1 dollar",
    2: "You wins 5 dollars",
    3: "You wins 10 dollars",
    4: "You wins 100 dollars",
    5: "You wins JECKPOT",
};

////////////////////////////////////////////
//Настройка игрового поля

// Подсчёт введённых чисел
const checkInputNumbers = () => {
    if (userNumbers.length > 5) {
        printNumbersEntered.innerHTML = `${userNumbers.length} БОЛЬШЕ НЕЛЬЗЯ!`;
        alert("АСТАНАВИТЕСЬ!");
        console.log("stop");
    } else {
        printNumbersEntered.innerHTML = `${userNumbers.length}`;
        console.log("ещё");
    }
};
// настройка кнопок
for (let i = 1; i <= 36; i++) {
    const newButton = document.createElement("button");
    newButton.className = "button-style";
    newButton.id = "button" + i;
    newButton.type = "button";
    newButton.value = i;
    newButton.textContent = i;

    cardNumber.appendChild(newButton);
    arrBtn.push(newButton);

    // объявление события клик для каждой из кнопок
    const btnSetingsFn = () => {
        arrBtn[i - 1].style.backgroundColor = "red";
        userNumbers.push(Number(arrBtn[i - 1].value));
        newButton.removeEventListener("click", btnSetingsFn); // снял событие клик с кнопки на котолрую нажали
        checkInputNumbers();
    };
    newButton.addEventListener("click", btnSetingsFn);
}


///////////////////////////////////////
//Отправка, проверка, вывод выигрыша  и комбинации тикущего тиража

// Случайные числа
let numRandom = 0
const testRandomArr = []
const randomNumbersFn = ()=>{
    numRandom  = Math.floor(Math.random() * arrBtn.length +1)
    testRandomArr.push(numRandom)
    
    
}
debugger
randomNumbersFn()
winnerNumbers.push(numRandom)
    for (let i = 5; i >= winnerNumbers.length +1 ; ){   
        
        // winnerNumbers.sort((a,b)=>{
        //     return a - b
        // })
       
            if(winnerNumbers.includes(numRandom)){
                randomNumbersFn()
                console.log("рестарт")
                // winnerNumbers.push(numRandom +'pp')
            } else {
                randomNumbersFn()
                winnerNumbers.push(numRandom)
            } 
    }

console.log(testRandomArr)
console.log(winnerNumbers)



const sendUserNumbers = document.getElementById("sendUserNumbers"); //кнопка отправить
const printUserNumbers = document.getElementById("printUserNumbers"); // кнопка проверить

//проверка и сортировка при отправке
const sendNumFun = () => {
    if (userNumbers.length > 5) {
        alert("Игра не возможна, много цифр!");
        return;
    } else if (userNumbers.length < 5) {
        alert("Игра не возможна, мало цифр!");
        return;
    } else console.log("54");
   

    userNumbers.sort((a, b) => {
        return a - b;
    });

    printUserNumbers.innerHTML = userNumbers.join("-"); //вывод в строку с разделителем
};


//проверка выигрышных комбинаций

const checkWinsBtn = document.getElementById("checkWinsBtn");
const printUserWins = document.getElementById("printUserWins");

const checkWinsFn = () => {
    if (userNumbers.length > 5) {
        alert("Игра не возможна, много цифр!");
        return;
    } else if (userNumbers.length < 5) {
        alert("Игра не возможна, мало цифр!");
        return;
    } else console.log("54");

    winnerNumbers.sort((a,b)=>{
        return a - b
    })

    for (let i = 0; i <= 4; i++) {
        if (winnerNumbers[i] === userNumbers[i]) {
            userWins += 1;
        } else userLos += 1;
    }
    printUserWins.innerHTML = `Угаданных чисел - ${userWins} , Выигрыш ${moneyWins[userWins]}`;
    printWinnerNumbers.innerHTML = winnerNumbers.join("-");
};

sendUserNumbers.onclick = () => {
    sendNumFun();
};

checkWinsBtn.onclick = () => {
    checkWinsFn();
};

//VER 1.0
// const cardNumber = document.getElementById("cardNumber");
// const btnCard = document.getElementById("btnCard");
// const arrBtn = [];
// const userNumbers = []
// for (let i = 1; i <= 36; i++) {
//     const newButton = document.createElement("button");
//     newButton.className = "button-style";
//     newButton.id = "button" + i;
//     newButton.type = "button";
//     newButton.value = i;
//     newButton.textContent = i;

//     cardNumber.appendChild(newButton);
//     arrBtn.push(newButton);
//     newButton.onclick = () => {
//     arrBtn[i - 1].style.backgroundColor = "red";
//     userNumbers.push(arrBtn[i - 1].value)

//     };
// }

// console.log(userNumbers)
