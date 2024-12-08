/*
 Реалізуйте клас MyString, який матиме такі методи: метод reverse(),
який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(),
який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.
*/

class MyString{
    reverse(str){return str.split("").reverse().join("");}

    ucFirst(str){
        let strArray = str.split("");
        strArray.unshift();
        strArray[0] = strArray[0].toUpperCase();
        return strArray.join("");
    }
}

let obj2 = new MyString();
document.write(obj2.reverse("321 ytr ewq") + "<br>");
document.write( obj2.ucFirst("qwerty") + "<br>" );