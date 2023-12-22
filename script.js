const cardNumber = document.getElementById("cardNumber");
const btnCard = document.getElementById("btnCard");
const lotoDraw = document.getElementById('loto-draw')
const printNumbersEntered = document.getElementById('printNumbersEntered')
let numbersEntered = 0
const arrBtn = [];
const userNumbers = [];
const winnerNumbers = [1,2,3,4,5]
let userWins = 0
let userLos = 0
const moneyWins = {
    0: 'You los ((',
    1: 'You wins 1 dollar',
    2: 'You wins 5 dollars',
    3: 'You wins 10 dollars',
    4: 'You wins 100 dollars',
    5: 'You wins JECKPOT'
}

// Подсчёт введённых чисел
const checkInputNumbers = ()=>{
    if(userNumbers.length -1 == 5){
        printNumbersEntered.innerHTML = `${userNumbers.length} БОЛЬШЕ НЕЛЬЗЯ!`
        console.log('stop')
    } else {
        numbersEntered +=1
        printNumbersEntered.innerHTML = `${userNumbers.length}`
        console.log('ещё')
    }console.log('ещё')
}


//Настройка кнопок с цифрами


for (let i = 1; i <= 36; i++) {
    const newButton = document.createElement("button");
    newButton.className = "button-style";
    newButton.id = "button" + i;
    newButton.type = "button";
    newButton.value = i;
    newButton.textContent = i;

    cardNumber.appendChild(newButton);
    arrBtn.push(newButton);
// объявляю событие клик для каждой из кнопок
    const btnSetingsFn = () => {
        arrBtn[i - 1].style.backgroundColor = "red";
        userNumbers.push(Number(arrBtn[i - 1].value));
        newButton.removeEventListener("click", btnSetingsFn); // снял событие клик с кнопки на котолрую нажали  
        checkInputNumbers() 
}
    newButton.addEventListener("click", btnSetingsFn);
}





const sendUserNumbers = document.getElementById("sendUserNumbers"); //кнопка отправить
const printUserNumbers = document.getElementById("printUserNumbers"); // кнопка проверить

const sendNumFun = ()=> {
    //сортировка по возрастанию
    userNumbers.sort(function (a, b) {
        return a - b;
    });

    const strUserNumbers = userNumbers.join("-"); //вывод в строку с разделителем
    printUserNumbers.innerHTML = strUserNumbers;
}


sendUserNumbers.addEventListener("click", sendNumFun);

const checkWinsBtn = document.getElementById("checkWinsBtn");
const printUserWins = document.getElementById("printUserWins");
//проверка выигрышных комбинаций
const checkWinsFn = () => {

    for (let i = 0; i <= 4 ; i++) {
        if (winnerNumbers[i] === userNumbers[i]) {
            userWins += 1;
        } else userLos += 1;
    }
    
    printUserWins.innerHTML = `Угаданных чисел - ${userWins} , Выигрыш ${moneyWins[userWins]}`;
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
