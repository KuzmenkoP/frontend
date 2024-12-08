/*
Створіть функцію-конструктор, яка створюватиме об'єкт Human (людина). 
*/

function HumanConstr(inName, inAge){
    this.Human = {
        name: inName,
        age: inAge,
    }
}

let objHuman = new HumanConstr("Peter", 36);
document.write("Об'єкт Human:<br>Ім'я: " + objHuman.Human.name + "<br>Вік: " + objHuman.Human.age);