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


// функция на поиск совпадений в двух массивах
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

let testArrRandomWin =[]

const testUsernumber = [10,15,25,30,36]

let testUserWins = 0
let testUserLos = 0
let testTry = 0
let result =[]


const test = ()=>{
    
// Случайные числа
let testNumRandom = 0; // Случайное число
testArrRandomWin = [] // обнуляю массив 

const randomNumbersFn = () => {
    testNumRandom = Math.floor(Math.random() * arrBtn.length + 1);
    console.log('step_1_получение рандомной цифры')
};

randomNumbersFn();

testArrRandomWin.push(testNumRandom); //первое число пушим влюбом случае
// проверка в цикле на дублирующиеся номера

for (let i = 5; i >= testArrRandomWin.length + 1; ) {
    console.log('step_2 цикл проверки на дублирующиеся номера')
    if (testArrRandomWin.includes(testNumRandom)) {
        console.log('step_3 найден дубликат, запуск повтора случайного числа')
        randomNumbersFn();
    } else {
        testArrRandomWin.push(testNumRandom);
        console.log(`step_4 дубликата не найдено, добавляем число в массив ${testArrRandomWin}`)
    }
}

// сортируем по порядку числа в масиве выигрышной комбинации
testArrRandomWin.sort((a,b)=>{
    console.log(`step_5 сортировка массива получившегося массива` )
    return a-b

})
console.log(`step_5.1 отсортированный массив ${testArrRandomWin}`)
console.log(`step_7 запуск функции поиска совпадений юзер чисел с рандомом и если есть запушить в масссив ${result}`)
result = fnSortArr(testArrRandomWin, testUsernumber)// функция на поиск совпадений в двух массивах
console.log('step_6 конец функции')
}

test()







for (let i =0; i <200000; i++){
    console.log(`step_9 запуск цикла на проверку наличие чисел в массиве совпадений. Найдено - ${result.length}`)
    if (result.length >= 4){
        console.log(`step_10 если длина массива совпадений больше 1 - прервать цикл и добавить + 1 к в переменную подсчёта успеха выигрыша`)
         testUserWins += 1
        console.log(testTry)
        break
    } else {
        console.log(`step_11 если длина массива совпадений меньше 1 - добавить +1 в переменную не удачных попыток`)
        console.log(`step_11,1 Случайные числа ${testArrRandomWin}`)
        console.log(`step_11,2 Числа пользователя  ${testUsernumber}`)
        console.log(`step_11,3 добавляем +1 к не удачам`)
        testUserLos += 1
        testTry +=1 // прибавляем +1 в переменную подсчёта запуска этой функции
        console.log(`step_11,4 Кол-во попыток  ${testTry}`)
        console.log(`step_11,5 повторный запуск функции генерации случайных чисел`)
        test()
        
    }
}



console.log(result)
console.log(result.length)

console.log(testUserWins + ' wins')
console.log(testUserLos + ' los')
console.log(testTry + ' Кол-во попыток подбора')
console.log(`Мог потратить денег на билеты (50 рублей 1 билет) ${testTry * 50} рублей`)



// console.log(testTry + " кол-во попыток")
