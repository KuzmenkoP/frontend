///////   1   ///////
let inDayNumber = 3;


function dayOfWeek (dayNum) {
    let dayArr = ["Понеділок",
                "Вівторок",
                "Середа",
                "Четвер",
                "П'ятниця",
                "Субота",
                "Неділя",];
    return dayNum > 7 || dayNum < 1 ? NaN : dayArr[dayNum - 1];
}

document.getElementById("cardsContainer").innerHTML +=
`Завдання 1:<br>In: ${inDayNumber}<br>
${dayOfWeek(inDayNumber)}<br><br><br>`;


///////   2   ///////
let mass = [];
function massAdd10X (inputMass) {
    for(let i=0; i<10; i++){
        inputMass[i] = "X";
    }
    return inputMass;
}

document.getElementById("cardsContainer").innerHTML +=
`Завдання 2:<br>${massAdd10X(mass) } <br><br><br>`;


///////   3   ///////
let firstName = "Peter";
let lastName = "Kuzmenko";
let age = 36;

function addUserDiv (frstName, lstName, userAge){
    document.getElementById("cardsContainer").innerHTML += `
    <div>First Name: ${frstName}<br>
         Last Name: ${lstName}<br>
         Age: ${userAge}
    </div>`;
}

document.getElementById("cardsContainer").innerHTML +=
`Завдання 3: `;
addUserDiv(firstName, lastName, age);
document.getElementById("cardsContainer").innerHTML +="<br><br><br>";


///////   4   ///////
let a = 3;

let ggg = a>0 ? function(){document.getElementById("cardsContainer").innerHTML += "Один!"} : function(){document.getElementById("cardsContainer").innerHTML += "Два!"};

document.getElementById("cardsContainer").innerHTML += `Завдання 4:<br>In: ${a} <br>`;
ggg();
document.getElementById("cardsContainer").innerHTML +=
`<br><br><br>`;

///////   5   ///////
let numA = 2, numB = 4;


function numCheck(num1, num2){
    if(num1%2 === 0 && num2%2 === 0) {return num1 * num2}
    else if(num1%2 !== 0 && num2%2 !== 0) {return num1 + num2}
    else {return num1%2 !== 0 ? num1 : num2}
}

document.getElementById("cardsContainer").innerHTML +=
`Завдання 5:<br>
A = ${numA}<br>
B = ${numB}<br>
Out: ${numCheck(numA, numB)}<br><br><br>`;

///////   6   ///////
let sArray = 3, eArray = 7, step = 1;

function range(strt, end, stp = 1){
    let max, min;
    if(end > strt){
        max = end;
        min = strt;
    }
    else{
        max = strt;
        min = end;
    }

    if(stp < 0){
        let buff = max;
        max = min;
        min = buff;
    }

    let array = [];
    for(let num=min, i = 0; i<=Math.abs(max-min); num += stp, i++){
        array[i] = num;
    }
    return array;
}
document.getElementById("cardsContainer").innerHTML +=
`Завдання 6:<br>
Start = ${sArray}<br>
End = ${eArray}<br>
Step = ${step}<br>`;

document.getElementById("cardsContainer").innerHTML += range(sArray, eArray, step);