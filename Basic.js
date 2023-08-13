//javascript is a programming language case sensitive  
//using console, using REPL(Read evaluate print loop)
//1.------------------VARIABLE--------------
// name given to the memory location vary means it can change (its value can be changed)
//2-------------------DATA TYPES------------------
// TYPES-
// Primtive data type
// 1.Number=+ve ,-ve ,integer, floating number with decimal
// 2.boolean-true or flaase
// 3.string= text/sequence or set of characters ,written in double or single quotes
// 4.undefined=which is not defined (JS does not knows values)
// 6.null=absence value(null is keyword in js)
// 7.bignit
// 8.Symbol


//3-----------------------OPERATORS--------------------------------

// 1.ARTHIMETIC OPERATOR--
// add,multiplication,modulo,diivision,sub;

// 2.NAN =
// global value representing value as not a Number
// NAN is type of number in JS (but is does not represents a valid value)
// example-0/0,NaN+1,NaN+2,NaN/NaN

// //4------------------------operator precedence------------
// bracket
// powder operator* *(l<-r)
// left to right- *,/,%
// (L->R) +,-

// 3.ASSIGNMENT OPERATOR
// =
// <=
// >=
// +=,-+,/+,%=

// 4.BINARY OPERATION
// needs two operhands
// a+b, a-b,


//4.UNARY OPERATOR
// 1.decrement post or per
// --a,a--
// 2.Increment post or per
// ++a,a++
//example-
let num=5;
newnum = ++num;
console.log(num);//6
console.log(newnum);//6
newnum1=num++;
console.log(num);//7
console.log(newnum1);//6

 
//5.comparison
//>,<,<=,>=,===,!=
//differnce between ==/===
// 5=='not';//true
// 0==false;//true

// 5==='not'//false
// 0===false//false


//6.conditional,

//1.if else
let x=18;
if(x==20){
 console.log("you can vote");
}
else{
    console.log("you can not vote");
}
//7.Logical operator
// && logical and
//logical error ||


//-------------truthy and false--------
// Everything in js is true or false means bollean value 
// its doesnt change its original value but when it is written in bollean context then it is taken as true or false

// 1.falsy value--
// false ,0,-0 " "(empty string ),udefined ,NaN, OR bigNIT values
// 2.truthy value
// //everythinng values
//example
let num1=0;
if(num1){
    console.log("the number is not a zero");
}
else{
    console.log("number is zero");
}
//o/p number iss zero



//----------------------------IDENTIFIER RULE-------------------------------------------------------------------
// 1.Name must be begin with letters,$,_
// 2.name can contain letter,digit,_(underscores) , and dollar sign(no space)
// 3.names are case sensitive(y & Ydiff)
// 4.Reserved(JS keyword) words cant be used as names

// -------------way of writing identifiers-----------------------------
// 1.camel case[camelCase] myFullName(java ,c++)
// 2.snake_case my_full_name (python)
// 3.Pascal case MyFullName



// ---------------------TYPESCRIPT---------------------------
// JS is dynamic type can be changed typescript is strict version of js in which we cant change data type of any another variable once definedd
// Designed by MS

// //------------------------------------STRING INDEX---------------------------------------------------------------------------
// index mean postion in js index start from 0
//  we can acess individual char of String

//example--

let name ="khushi";
console.log(name[0]);//k

//for length
console.log(name.length);

//concatenation -adding string
let fname="khushi";
let lname="pandey";
console.log(fname+lname);


// the JS is not connected to our  browser so of we want something should print on browser then we use console.log for it.
//this is the way to connect JS with browser console.

//Link JS
//<script src=""></script>

// ----------------------comments----------------------------------------
// this is a comment

//-----------------------------------Template literals-----------------------------------------------------------------------------
let a =10;
let b=20;
// console.log("the total price is ", a+b);
let total=`price ${a+b}`;
console.log(total);
//backtick(``);
//Interpolation
//Template literals provide an easy way to interpolate variables and expressions into strings.
// console.log('the total price is  ${a+b}');


//----------------SWITCH Statement------------------------------------------------------------
//cases mean no of condition
//used when we have same fixed values thst we used to compare ,break is used to break the flow we dont used break then next condition will all executed 
//default is same as else;

//example
let color='red';
switch(color){
    case "pink":
    console.log("wrong");
    break;
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("choose other color");
        break;

        default:
            console.log("choose");
}


//-------------------------ALERT AND PROMPT-------------------------
//alert("damger");//similar to pop up  for remaning alert we press ok
// console.error("this is an error");(this will display as error in window )
// console.warn("this ia a warning");(this will display as warning)

//----------------------------PROMPT------------------------------------
//for some input taking from user (similar popup)
// let name1=prompt("enter first name");
// let name2=prompt("enter last name");
// console.log(name1+" "+ name2);

