///////   RECTANGLE   ///////

let wRect = 25, hRect = 10;

for(let i = 0; i < hRect; i++){
	for(let j = 0; j < wRect; j++){
		if( i == 0 || i == (hRect - 1) || j == 0 || j == (wRect - 1)){ document.write("*"); }
		else { document.write("<span>&nbsp</span>"); }
	}
	document.write("<br>");
}


///////   TRIANGLE   ///////
document.write("<br><br><br>");

let wTrg = 15, hTrg = 15;

let count = wTrg-1;
for(let i = 0; i < hTrg; i++){
	for(let j = 0; j < wTrg; j++){
		if( i == (hTrg - 1) || j == (wTrg - 1) || j == count ){ document.write("*"); }
		else { document.write("<span>&nbsp</span>"); }
	}
	count--;
	document.write("<br>");
}


///////   RHOMBUS   ///////
document.write("<br><br><br>");

let wRhmb = 11, hRhmb = 11;

hRhmb /= 2;

cnt_1 = Math.trunc( wRhmb / 2 );
cnt_2 = cnt_1;
for(let i = 0; i < hRhmb; i++){
	for(let j = 0; j < wRhmb; j++){
		if(cnt_1 == cnt_2){}
		else if( j == cnt_1){ document.write("*"); }
		else { document.write("<span>&nbsp</span>"); }
		
		if( j == cnt_2 ){ document.write("*"); }
		else { document.write("<span>&nbsp</span>"); }
	}
	
	cnt_1--;
	cnt_2++;
	document.write("<br>");
}

cnt_1 = 1;
cnt_2 = wRhmb - 2;
for(let i = 0; i < (hRhmb - 1) ; i++){
	for(let j = 0; j < wRhmb; j++){
		if(cnt_1 == cnt_2){}
		else if( j == cnt_1){ document.write("*"); }
		else { document.write("<span>&nbsp</span>"); }
		if( j == cnt_2){ document.write("*"); }
		else { document.write("<span>&nbsp</span>"); }
	}
	
	cnt_1++;
	cnt_2--;
	document.write("<br>");
}


///////   QUESTION   ///////
document.write("<br><br><br>");

let varA = prompt("Введыть значення змынної  А");
let msg;
if(varA == 10){ msg = "Вірно"; } else { msg = "Неправильно"; }
document.write(msg);


///////   CLOCK   ///////
document.write("<br><br><br>");

let min = +prompt("Введіть число від 0 до 59");
if(min >= 0 && min < 15 ){ msg = "першої"; }
else if(min <= 30){ msg = "другої"; }
else if(min <= 45){ msg ="третьої"; }
else if(min <= 60){ msg = "четвертої"; }
else { msg = "НЕВІДОМОЇ"}

document.write(`Вказане число відноситься до ${msg} чверті`);


///////   SEASONS   ///////
document.write("<br><br><br>");

let result;
let season = +prompt("Введіть число від 1 до 4");
switch(season){
	case 1:
		result = "зима";
		break;
	case 2:
		result = "весна";
		break;
	case 3:
		result = "літо";
		break;
	case 4:
		result = "осінь";
	default:
		result = "Введенне значення не відповідає умові від 1 до 4";
}
document.write(result);