/*
Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я), surname (прізвище), rate (ставка за день роботи), days (кількість відпрацьованих днів).
Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
Зарплата - це добуток (множення) ставки rate на кількість відпрацьованих днів days. 
*/

class Worker{
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary(){
        document.write(`Зарплата працівника ${this.name} ${this.surname} : ${this.rate * this.days} $<br>`);
    }
}

let obj = new Worker("Peter", "Kuzmenko", 8 * 17, 22);
obj.getSalary();