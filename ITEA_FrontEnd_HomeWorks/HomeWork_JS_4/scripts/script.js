// 1 Дані два масиви: ['a', 'b', 'c'] та [1, 2, 3]. Об'єднайте їх разом.
// 2 Дан масив ['a', 'b', 'c']. Додайте йому до кінця елементи 1, 2, 3.
// 3 Дан масив [1, 2, 3]. Зробіть із нього масив [3, 2, 1].
// 4 Дан масив [1, 2, 3]. Додайте йому до кінця елементи 4, 5, 6.
// 5 Дан масив [1, 2, 3]. Додайте йому на початок елементи 4, 5, 6.
// 6 Дан масив ['js', 'css', 'jq']. Виведіть перший елемент на екран.
// 7 Дан масив [1, 2, 3, 4, 5]. За допомогою методу slice запишіть нові елементи [1, 2, 3].
// 8 Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 4, 5].
// 9 Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 2, 10, 3, 4, 5].
// 10 Дан масив [3, 4, 1, 2, 7]. Відсортуйте його.
// 11 Дан масив з елементами 'Привіт, ', 'світ' і '!'. Необхідно вивести на екран фразу 'Привіт, світ!'.
// 12 Створіть масив arr з елементами 1, 2, 3, 4, 5 двома різними способами.
// 13 Створіть масив arr = ['a', 'b', 'c', 'd'] і за допомогою його виведіть на екран рядок 'a+b, c+d'.
// 14 Запитайте у користувача кількість елементів масиву. Виходячи з даних, які ввів користувач створіть масив на ту кількість елементів, яку передав користувач. у кожному індексі масиву зберігайте чило який показуватиме номер елемента масиву.
// 15 Зробіть так, щоб з масиву, який ви створили вище, вивелися всі непарні числа в параграфі, а парні в спані з червоним фоном.

///////   1   ///////
let mass = ['a', 'b', 'c'];
let mass_2 = [1, 2, 3];

let result = mass.concat(mass_2);
document.write("1.&nbsp&nbsp&nbsp ");
document.write(result);

///////   2   ///////
mass = ['a', 'b', 'c'];

let mLength = mass.length;
for(let i=1; i<=3; i++){
	mass[i + mLength - 1] = i;
}
result = mass;

document.write("<br>2.&nbsp&nbsp&nbsp ");
document.write(result);

///////   3   ///////
mass = [1, 2, 3];

result = mass.reverse();

document.write("<br>3.&nbsp&nbsp&nbsp ");
document.write(result);

///////   4   ///////
mass = [1, 2, 3];

mLength = mass.length;
for(let i=1; i<=3; i++){
	mass.push(mLength + i);
}
result = mass;

document.write("<br>4.&nbsp&nbsp&nbsp ");
document.write(result);

///////   5   ///////
mass = [1, 2, 3];

for(let i=6; i>=4; i--){
	mass.unshift(i);
}
result = mass;

document.write("<br>5.&nbsp&nbsp&nbsp ");
document.write(result);

///////   6   ///////
let newMass = ['js', 'css', 'jq'];

document.write("<br>6.&nbsp&nbsp&nbsp ");
document.write(newMass[0]);

///////   7   ///////
mass = [1, 2, 3, 4, 5];

result = mass.slice(0, 3);

document.write("<br>7.&nbsp&nbsp&nbsp ");
document.write(result);

///////   8   ///////
mass = [1, 2, 3, 4, 5];

result = mass.splice(0, 1);
mass.splice(0, 2);
result = result.concat(mass);

document.write("<br>8.&nbsp&nbsp&nbsp ");
document.write(result);

///////   9   ///////
mass = [1, 2, 3, 4, 5];

result = mass.splice(0, 2);
result.push(10);

result = result.concat(mass);

document.write("<br>9.&nbsp&nbsp&nbsp ");
document.write(result);

///////   10   ///////
mass = [3, 4, 1, 2, 7];

result = mass.sort();

document.write("<br>10.&nbsp ");
document.write(result);

///////   11   ///////
mass = ['Привіт, ', 'світ', '!'];

result = mass.join("");

document.write("<br>11.&nbsp ");
document.write(result);

///////   12   ///////
let arr1 = [1, 2, 3, 4, 5];
let arr = Array(1, 2, 3, 4, 5);

document.write("<br>12.&nbsp ");
document.write(arr);

///////   13   ///////
arr = ['a', 'b', 'c', 'd'];

document.write("<br>13.&nbsp ");
document.write(`${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`);

///////   14   ///////
let nMass = +prompt("Введіть кількість елементів масиву");
mass = [];

for(let i=0; i<nMass; i++){
	mass.push(i);
}

document.write("<br>14.&nbsp ");
document.write(mass);

///////   15   ///////
document.write("<br>15.&nbsp <br>");
for(let i=0; i<nMass; i++){
	if(i%2 !== 0){ document.write(`<p>${mass[i]}</p>`);	}
	else { document.write(`<span>${mass[i]}</span>`); }
}