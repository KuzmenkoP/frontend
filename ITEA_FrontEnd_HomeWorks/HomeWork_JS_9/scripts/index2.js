/*
2. Створіть картинку та кнопку з назвою "Змінити картинку"
зробіть так щоб при завантаженні сторінки була картинка
https://itproger.com/img/courses/1476977240.jpg
При натисканні на кнопку вперше картинка замінилася на
https://itproger.com/img/courses/1476977488.jpg
при другому натисканні щоб картинка замінилася на
https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png
*/

const htmlElems = document.getElementsByTagName("body");

const img = document.createElement("div");
img.style.backgroundImage = "url(https://itproger.com/img/courses/1476977240.jpg)";
img.style.width = "42.5rem";
img.style.height = "28rem";

const btn = document.createElement("input");
btn.setAttribute("type", "button");
btn.setAttribute("value", "Змінити картинку");

htmlElems[0].append(img);
htmlElems[0].append(btn);


let counter = true;

btn.onclick = function (){
    if(counter) img.style.backgroundImage = "url(https://itproger.com/img/courses/1476977488.jpg)"
    else img.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png)";

    counter = !counter;
}