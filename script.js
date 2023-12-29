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



const fnSortArr = (firstArr, secondArr)=>{
    const results = [];
    for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
          if (firstArr[i] === secondArr[j]) {
            results.push(firstArr[i])
          }
        }
      }
      return results.sort((a,b)=>{
        return a-b
      })
}

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
const randomNumbersFn = () => {
    numRandom = Math.floor(Math.random() * arrBtn.length + 1);
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

    userWins = fnSortArr(winnerNumbers, userNumbers)

    printUserWins.innerHTML = `Угаданных чисел - ${userWins.length} , Выигрыш ${moneyWins[userWins.length]}`;
    printWinnerNumbers.innerHTML = winnerNumbers.join("-");
};

sendUserNumbers.onclick = () => {
    sendNumFun();
};

checkWinsBtn.onclick = () => {
    checkWinsFn();
};



console.log(winnerNumbers);



///////////////////////
///////////////////////
///////////////////////
///////////////////////

let testArrRandomWin =[10,15,25,30,24]

const testUsernumber = [10,15,25,30,36]

let testUserWins = 0
let testUserLos = 0
let testTry = 0
let result =[]


const test = ()=>{

// Случайные числа
let testNumRandom = 0;
testArrRandomWin = [] // обнуляю массив 

const randomNumbersFn = () => {
    testNumRandom = Math.floor(Math.random() * arrBtn.length + 1);
};

randomNumbersFn();

testArrRandomWin.push(testNumRandom);
// проверка в цикле на дублирующиеся номера

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

 testTry +=1
}



test()


// console.log(testArrRandomWin)
// console.log(testUsernumber)
result = fnSortArr(testArrRandomWin, testUsernumber)


for (let i =0; i <100; i++){
    if (result.length >= 1){
        testUserWins += 1
    } else {
        testUserLos += 1
        test()
    }
}



console.log(result)
console.log(result.length)

console.log(testUserWins + ' wins')
console.log(testUserLos + ' los')
console.log(testTry + ' Кол-во попыток подбора')



// console.log(testTry + " кол-во попыток")
