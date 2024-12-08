var x = 6, y = 14, z = 4;

document.write("x += y - x++ * z = ");
x += y - x++ * z;
document.write(x);
document.write("<br>");

//Виконання по діям:
//	x * z   =  24
//	y - 24   =  -10
//	x = x - 10 = -4



var x = 6, y = 14, z = 4;

document.write("z = -x - y * 5 = ");
z = -x - y * 5;
document.write(z);
document.write("<br>");

//Виконання по діям:
//	y * 5   =  70
//	-x - 70   =  -76
//	z = -76



var x = 6, y = 14, z = 4;

document.write("y / = x + 5% z = ");
y /=x+5%z;
document.write(y);
document.write("<br>");

//Виконання по діям:
//	5% z   =  1
//	x + 1   =  7
//	y = y / 7 = 2



var x = 6, y = 14, z = 4;

document.write("z - x + + + y * 5 = ");
document.write(z - x + + + y * 5);
document.write("<br>");

//Виконання по діям:
//	y * 5   =  70
//	-x + 70   =  64
//	z + 64 = 68



var x = 6, y = 14, z = 4;

document.write("x = y - x ++ * z = ");
x = y - x ++ * z;
document.write(x);
document.write("<br>");

//Виконання по діям:
//	x * z   =  24
//	y - 24   =  -10
