Higher and Lower
//purpose: To find which number is greaterNum
//signature: Takes two numbers and returnes greater of the two
//examples: (6 and 4) --> returns 6


function greaterNum(num1, num2) {
  if (num1 > num2){
    return num1;
  } else {
    return num2;
  }
}
var num1 = 6;
var num2 = 4;

var num3 = 5;
var num4 = 8;

greaterNum(num1, num2);
greaterNum(num3, num4);

The World Translator
//purpose: to transle "Hello, World" into three different languages
//signature: Takes English and translates to Spanish, German, and Italian.
//examples: Hello World --> Hola, Mundo, Hallo Welt, Ciao Mondo.

function helloWorld (langCode) {
  var en = "Hello, World";
  var esp = "Hola, Mundo";

  var ita = "Ciao, Mondo";
  var germ = "Hallo, Welt";
    if (langCode == "en") {
      return [esp, germ, ita];
    } else if (langCode == "esp") {
      return [en, germ, ita];
    } else if (langCode == "germ") {
      return [esp, ita, en];
    } else if (langCode == "ita") {
      return [en, germ, esp];
    } else {
      return (en);
    }
}
helloWorld("germ");


Grade Calculator
//purpose: turn numbers scores to letter grades
//signature: takes number converts to letter
//examples: 95 == A, 83 == B


function assignGrade (number) {

    if (number >= 90) {
      return ("A");
    } else if (number >= 80 && number < 90) {
      return ("B");
    } else if (number >= 70 && number < 80) {
      return ("C");
    } else if (number >= 60 && number < 70) {
      return ("D");
    } else {
      return ("F");
    }
}

assignGrade(89)


Plularlizer
//purpose: Turn a noun into plurals
//signature: Takes a noun and number and returns plural form
//examples: 95 == A, 83 == B

function pluralForm(noun, num) {
  console.log(noun.slice(-1));

  if (noun.slice(-1) == "s" || noun.slice(-1) == "x") {
    return (num + " " + noun + "es");
  }

  if (noun == "sheep" || noun == "geese" || noun == "children"){
    return (num + " " + noun)
  }

  if (num > 1) {
    return (num + " " + noun + "s");
  } else {
  return (num + " " + noun);
}
}

pluralForm("box", 2);


//Purpose: create a function that picks random numbers between 1 and 100 and repeatedly asks questions
//Signature:
//Examples:
function isNumber(userInput) {
  var userNum = parseInt(userInput, 10);
  if (userNum.toString == "NaN") {
    var userInput = prompt("Guess what our random number is.");
  } else {
    return (userNum);
  }
}
function hiLo (){
  var randNum = Math.floor(Math.random() * 100);
  console.log(randNum);

  var userInput = prompt("Guess what our random number is.")
    var userNum = isNumber(userInput);

  var userTries = 0;
  while (userNum != randNum){
    if (userNum > randNum){
      userNum = prompt(userNum + " is too high! Guess again!")
    } else if (userNum < randNum){
      userNum = prompt(userNum + " is too low! Guess again!")
    } else {
      alert("You Rock!!" + userNum + " is our number!!");
    }
    userTries += 1;
    if (userTries >= 7) {
      return alert("Bummer! too many tries. 7 was your limit!")
    }
  }
  alert("You guessed our number!!");
}
