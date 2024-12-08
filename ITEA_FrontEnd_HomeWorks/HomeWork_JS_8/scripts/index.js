/*
Створити клас Car , Engine та Driver.
Клас Driver містить поля - ПІБ, стаж водіння.
Клас Engine містить поля – потужність, виробник.
Клас Car містить поля – марка автомобіля, клас автомобіля, вага, водій типу Driver, мотор типу Engine. Методи start(), stop(), turnRight(), turnLeft(), які виводять на друк: "Поїхали", "Зупиняємося", "Поворот праворуч" або "Поворот ліворуч". А також метод toString(), який виводить повну інформацію про автомобіль, її водія і двигуна.

Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.
Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.
*/

class Driver{
    constructor(fullName, experience){
        this.fullName = fullName;
        this.exp = experience;
    }

    toString(){
        return `<br>ПІБ: ${this.fullName}<br>Стаж водіння: ${this.exp} р<br>`;
    }
}

class Engine{
    constructor(power, brand){
        this.power = power;
        this.brand = brand;
    }

    toString(){
        return `<br>Потужність: ${this.power} к.с.<br>Виробник: ${this.brand}<br>`;
    }
}

class Car{
    constructor(brand, cls, veight, fullName, experience, power, engineBrand){
        this.brand = brand;
        this.class = cls;
        this.veight = veight;
        this.driver = new Driver(fullName, experience);
        this.engine = new Engine(power, engineBrand);
    }
    
    start(){document.write("Поїхали")};
    stop(){document.write("Зупиняємося")};
    turnRight(){document.write("Поворот праворуч")};
    turnLeft(){document.write("Поворот ліворуч")};

    toString(){
        document.write(`Марка автомобіля: ${this.brand}<br>`);
        document.write(`Клас автомобіля: ${this.class}<br>`);
        document.write(`Вага автомобіля: ${this.veight} т<br>`);

        document.write("<br>Водій: " + this.driver.toString() + "<br>");
        document.write("Двигун: " + this.engine.toString());
    }
}

class Lorry extends Car{
    constructor(capacity, brand, cls, veight, fullName, experience, power, engineBrand){
        super(brand, cls, veight, fullName, experience, power, engineBrand);
        this.capacity = capacity;
    }    

    toString(){
        super.toString();
        document.write(`<br>Вантажопідйомність: ${this.capacity} т <br>`)
    }
}

class SportCar extends Car{
    constructor(maxSpeed, brand, cls, veight, fullName, experience, power, engineBrand){
        super(brand, cls, veight, fullName, experience, power, engineBrand);
        this.maxSpeed = maxSpeed;
    }

    toString(){
        super.toString();
        document.write(`<br>Гранична швидкість: ${this.maxSpeed} км/год<br>`);
    }
}

let lorryObj = new Lorry(3, "Mercedes Benz", "C", 3, "Іванов Іван Іванович", 7, 300, "Mercedes Benz corp.");
lorryObj.toString();

document.write("<br>");
document.write("<hr>");
document.write("<br>");

let sport = new SportCar(220, "Ford Mustang", "A", 1, "Петров Петро Петрович", 3, 220, "Mustang corp.");
sport.toString();
