/*
Створіть функцію-конструктор, яка буде створювати об'єкт Human (людина), додайте на власний розсуд властивості та методи в цей об'єкт. Подумайте, які методи та властивості слід створити рівня екземпляра, а які рівня функції-конструктора.
*/

function Human(gender, age, height, weight){
    this.gender = gender;
    this.age = age;
    this.height = height;
    this.weight = weight;

    this.getInfo = () => {
        document.write(`Human:<br>Gender: ${this.gender}<br>Age: ${this.age}<br>Height: ${this.height}<br>Weight: ${this.weight}<br>`);
    }
}

Human.prototype.walk = function(){
    document.write("<br>Walking");
}
Human.prototype.eat = function(){
    document.write("<br>Eating");
}

let human = new Human("male", 30, 180, 70);
human.getInfo();

human.walk();
human.eat();