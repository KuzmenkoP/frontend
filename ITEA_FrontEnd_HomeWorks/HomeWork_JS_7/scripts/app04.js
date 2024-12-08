/*
Створіть масив об'єктів та реалізуйте функцію, яка сортуватиме елементи масиву за значенням властивості
вік за зростанням або за спаданням.
*/

let length = 7;

let arrOfObj = [];
for(let i = 0; i<length; i++){
    arrOfObj[i] = {
        age: ( Math.random() * (50 - 20) + 20 ).toFixed(0),
    };
    document.write(`Вік об'єкту:  ${arrOfObj[i].age} років<br>`);
}

function sortArrayElem(arr, isUp){
    document.write(`<br>Сортування масиву об'єктів за ${isUp?"зростанням":"спаданням"} років<br>`);
    let buffElem;
    let head = arr.length;

    let select;
    for(let j = head; j>=0; j--){
        select = 0;
        for(let i = 1; i<head; i++){
            if(arr[select].age > arr[i].age && isUp){
                buffElem = arr[i];
                arr[i] = arr[select];
                arr[select] = buffElem;
            }
            else if(arr[select].age < arr[i].age && !isUp){
                buffElem = arr[i];
                arr[i] = arr[select];
                arr[select] = buffElem;
            }
            select = i;
        }
        head--;
    }


    for(let i=0; i<arr.length; i++){
        document.write(`Вік об'єкту:  ${arr[i].age} років<br>`);
    }
}

sortArrayElem(arrOfObj, true);
sortArrayElem(arrOfObj, false);