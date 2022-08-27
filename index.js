var name = "Jahid Hasan Hridoy";
document.write(name);
var name = "Ritu";
document.write(name);
num a=1, b=2;
num c=a+b;
document.write=(c);

var num = "20.3";
num = parseFloat(num);
console.log(typeof(num));

var number = 20.37454;
console.log(number.toFixed(2))

console.log(Number(false));
console.log(Number(true));

var jahid = "Jahid Hasan Hridoy";
var ritu = " Ritu";
var relation = jahid + ritu;
document.write(" Relation     :  " + relation);

var fullname = "Jahid Hasan Hridoy";
var ritu_name= "Sharmin";
document.write(fullname + " is my name" + ritu_name);


var num1= 20;
var num2= 30;
document.write("Number 1 is: " + num1 + "  and  "+"  Number 2 is: " + num2);


var text = "I love you";
var lenth = text.length;
document.write("Number of Character " +" ' " + text+ " ' " +" = " + lenth);

var jahid = prompt("Enter Your name: ");
document.write("The text helgth "+jahid.length;);


// juser inpute 
var text =prompt("Enter The Text");
var lenth = text.length;
document.write("Number of Character " +" ' " + text+ " ' " +" = " + lenth);

//  text index number print 
var text = "Ritu";
var lenth = text.charAt(2);
document.write("Number of Character " +" ' " + text+ " ' " +" = " + lenth);


/* text upper case & lower case 
var text = " Sharmin akter Ritu";
 var lenth = text.toUpperCase();
var length1 = text.toLowerCase();
document.write("Number of Character " +" ' " + text+ " ' " +" = " + lenth + length1);
*/

// concatination
var text1 = "Sharmin akter ";
var text2 = "Ritu";
var text = text1.concat(text2);
document.write(text);


// slice text
var text2 = "Ritu_amar_moharani";
var text = text2.slice(0, 10);
document.write(text);


// task. video number 7
var text = prompt("Fast name");
var text1 = prompt("last name");
var full = text + text1;
var fullle = full.length;
var fulluper = full.toUpperCase();
var fulll = full.charAt (2);
document.write("Full name =  " + full+ " \ & The lenth is :\ " + fullle + "& uppercase is: " + fulluper+ "& also 2nd position = " + fulll);



arithmetic Operator > + -  * / % (Modulus) ** (Exponent)
var x =5;
var y= 4;
i= x+y;
document.write(i);

var i= prompt("Enter fast Number: ");
var j= prompt("Enter 2nd number: ");
var sum, sub, mul,dev;
sum = i+j;
document.write(i + "+" +j + "="+sum +"</br>" );
sub = i-j;
document.write(i + "-" +j + "="+sub+"</br>");
mul = i*j;
document.write(i + "x" +j + "="+mul+"</br>");
dev = i-j;
document.write(i + "/" +j + "="+dev+"</br>");


//number 10 tutorial
var number1 =prompt("Enter Fast Number:");
var number2 =prompt("Enter 2nd Number: ");

//how to convart string to integer 
number1 = parseInt(number1 , 10);
number2 = parseInt(number2 , 10);

var sum, sub;

sum = number1+number2;
document.write("sum = "+sum+"</br>");

sub = number1- number2;
document.write("sub = "+sub);

//class 10 exam
var number1 =prompt("Enter Fast Number: ");
var number2 =prompt("Enter 2nd Number: ");

number1 = parseInt(number1 , 10);
number2 = parseInt(number2 , 10);

var gog, biog, gun, vag, mod;

another way is get 1 valu & use random time

gog = number1+number2;
biog = number1-number2;
gun = number1*number2;
vag = number1/number2;
mod = number1%number2;

document.write(number1 + " + " + number2 + " = " +gog + "</br>" );
document.write(number1 + " - " + number2 + " = " +biog + "</br>" );
document.write(number1 + " x " + number2 + " = " +gun + "</br>" );
document.write(number1 + " / " + number2 + " = " +vag + "</br>" );
document.write(number1 + " % " + number2 + " = " +mod + "</br>" );

//class 11
var base = parseFloat(prompt("Enter Base: "));
var hight = parseFloat(prompt("Enter hight: "));

Rectangle = base*hight/2;
document.write("The Ractangle of Base = "+ base + " & Hight =  "+hight+ " so Rectangle is = " + Rectangle);

//class 12
var tamp = parseFloat(prompt("Enter Fahrenheit temp: "));

fartocal = (tamp-32)*(5/9);
document.write("The Fahrenheit temp = "+ tamp + " so celsius temp is = " + fartocal);

class 13
all in colse


//class 14
var number1 = parseFloat(prompt("Enter fast The Number: "));
var number2 = parseFloat(prompt("Enter Secend The Number: "));
var number3 = parseFloat(prompt("Enter Secend The Number: "));

if(number1 >=number2 && number1>=number3)
    document.write("Number1 is gater than other");

else if(number2 >= number1 && number2 >=number3)
    document.write("Number2 is gater than other");

else
    document.write("Number 3 is gater than other.");
