// ДЛЯ ПОДУМАТЬ
// снять события с кнопок после достижения максимальной комбинации
// кнопка сброс или при повторном нажатии снимать выделение
// не правильная проверка на совпадение чисел.
// Нужно проходить каждым индексом по второму массиву и искать совпадения и потом пушить  в другой массив


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
//Отправка, проверка, вывод выигрыша и комбинации тикущего тиража

// Случайные числа
let numRandom = 0;
const testRandomArr = [];
const randomNumbersFn = () => {
    numRandom = Math.floor(Math.random() * arrBtn.length + 1);
    testRandomArr.push(numRandom);
};

randomNumbersFn();
winnerNumbers.push(numRandom);
for (let i = 5; i >= winnerNumbers.length + 1; ) {
    if (winnerNumbers.includes(numRandom)) {
        randomNumbersFn();
        console.log("рестарт");
    } else {
        winnerNumbers.push(numRandom);
    }
}

//проверка и сортировка при отправке
const sendUserNumbers = document.getElementById("sendUserNumbers"); //кнопка отправить
const printUserNumbers = document.getElementById("printUserNumbers"); // кнопка проверить

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

    winnerNumbers.sort((a, b) => {
        return a - b;
    });

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


console.log(testRandomArr);
console.log(winnerNumbers);



///////////////////////
///////////////////////
///////////////////////
///////////////////////

let testArrRandomWin =[]

const testUsernumber = [10,15,25,30,36]

let testUserWins = 0
let testUserLos = 0
let testTry = 0
const result = [];


const test = ()=>{

// Случайные числа
let testNumRandom = 0;
testArrRandomWin = []

const randomNumbersFn = () => {
    testNumRandom = Math.floor(Math.random() * arrBtn.length + 1);
};

randomNumbersFn();



testArrRandomWin.push(testNumRandom);



for (let i = 5; i >= testArrRandomWin.length + 1; ) {
    if (testArrRandomWin.includes(testNumRandom)) {
        randomNumbersFn();
        console.log("рестарт");
    } else {
        testArrRandomWin.push(testNumRandom);
    }
}

testArrRandomWin.sort((a,b)=>{
    return a-b
})



testTry ++

}



test()

// for (let i = 0; i <= 4; i++) {
//     if (testArrRandomWin[i] === testUsernumber[i]) {
//         testUserWins += 1;
//     } else testUserLos += 1;
// }



for (let i = 0; i < testArrRandomWin.length; i++) {
  for (let j = 0; j < testUsernumber.length; j++) {
    if (testArrRandomWin[i] === testUsernumber[j]) {
      result.push(testArrRandomWin[i])
    }
  }
}


for (let i = 0; i<=100; i++){
    if (result.length == 1 ){
        console.log('finsh')
        console.log(testTry + " кол-во попыток")
        console.log(testUserWins + ' Числа выиграли')
        console.log(testUsernumber)
        console.log(testArrRandomWin)
        console.log(result)
        
        break
    } else  {
        

        console.log('Рестарт подсчёта')
        // console.log(testUsernumber)
        // console.log(testArrRandomWin)
        console.log(testTry + " кол-во попыток")
            test()
    }

}





// console.log(testTry + " кол-во попыток")
