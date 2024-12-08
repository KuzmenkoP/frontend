// 1. Створіть 5 дівів на сторінці потім використовуючи getElementsByTagName і forEath поміняйте дивам колір фону.

const htmlElems = document.getElementsByTagName("body");

let nDiv = 5;
for(;nDiv>0;nDiv--){
    htmlElems[0].appendChild(document.createElement("div"));
}

const [...divElems] = document.getElementsByTagName("div");
divElems.forEach((elem)=>{elem.style.backgroundColor="green"});