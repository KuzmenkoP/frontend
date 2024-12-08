/*
Реалізуйте програму перевірки телефону
* Використовуючи JS Створіть поле для введення телефону та кнопку збереження
* Користувач повинен ввести номер телефону у форматі 000-000-00-00
* Після того як користувач натискає кнопку зберегти перевірте правильність введення номера, якщо номер правильний зробіть зелене тло і використовуючи document.location переведіть користувача на сторінку https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg якщо буде помилка, відобразіть її в діві до input.
*/

let bgDiv = document.createElement("div");
bgDiv.id = "bgDiv";

document.body.append(bgDiv);

let inputDiv = document.createElement("input");
inputDiv.id = "inputDiv";
inputDiv.type = "text";
inputDiv.style.fontSize = "3rem";

bgDiv.append(inputDiv);


let btn = document.createElement("button");
btn.innerText = "Збереження";
btn.classList.add("button1");

bgDiv.append(btn);


let regExp = /\d{3}-\d{3}-\d{2}-\d{2}/;

function btnFunc(){
    if(inputDiv.value.length === 13 && regExp.test(inputDiv.value)){
        document.body.style.backgroundColor = "green";
        document.location = "https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg";
    }
    else {
        inputDiv.value = "";
        inputDiv.placeholder = "ERROR";
    }
}

btn.onclick = btnFunc;