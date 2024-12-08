/*
Створіть програму секундомір.
* Секундомір матиме 3 кнопки "Старт, Стоп, Скидання"
* При натисканні на кнопку стоп фон секундоміра має бути червоним, старт - зелений, скидання - сірий * Виведення лічильників у форматі ГГ:ХХ:СС
* Реалізуйте Завдання використовуючи синтаксис ES6 та стрілочні функції
*/


let bgDiv = document.createElement("div");
bgDiv.id = "bgDiv";

document.body.append(bgDiv);

let inputDiv = document.createElement("input");
inputDiv.id = "inputDiv";
inputDiv.type = "text";

bgDiv.append(inputDiv);


let btnStart = document.createElement("button");
btnStart.innerText = "Старт";
btnStart.classList.add("button2");

bgDiv.append(btnStart);


let btnStop = document.createElement("button");
btnStop.innerText = "Стоп";
btnStop.classList.add("button2");

bgDiv.append(btnStop);


let btnReset = document.createElement("button");
btnReset.innerText = "Скидання";
btnReset.classList.add("button2");

bgDiv.append(btnReset);

let start;
let hours = 0;
let min = 0;
let sec = 0;

inputDiv.value = `${hours<10?"0"+hours:hours} : ${min<10?"0"+min:min} : ${sec<10?"0"+sec:sec}`;

function timerStart(){
    if(sec>=59){
        if(min>=59){
            if(hours>=99){
                min = 0;
                hours = 0
            }
            else {
                sec = 0;
                min = 0;
                hours++;
            };
        }
        else {
            sec = 0;
            min++;
        }
    }
    else sec++
    inputDiv.value = `${hours<10?"0"+hours:hours} : ${min<10?"0"+min:min} : ${sec<10?"0"+sec:sec}`;
}

function funcStart(){
    bgDiv.style.backgroundColor = "green";
    btnStart.disabled = true;
    btnStop.disabled = false;
    btnReset.disabled = true;
    start = setInterval(timerStart, 1000);
}

btnStart.onclick = funcStart;


function funcStop(){
    bgDiv.style.backgroundColor = "red";
    clearInterval(start);
    btnStop.disabled = true;
    btnStart.disabled = false;
    btnReset.disabled = false;
}

btnStop.onclick = funcStop;


function funcReset(){
    bgDiv.style.backgroundColor = "grey";
    sec = 0;
    min = 0;
    hours = 0;

    inputDiv.value = `${hours<10?"0"+hours:hours} : ${min<10?"0"+min:min} : ${sec<10?"0"+sec:sec}`;
}


btnReset.onclick = funcReset;