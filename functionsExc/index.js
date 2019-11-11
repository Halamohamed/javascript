/*function speak(word){
  alert(word);  
};
speak('helo world');*/

function add(num1,num2){
    var addedValues= num1 + num2;
    return addedValues;
};
var addResult = add(3,4);
console.log(addResult);

function subtract(num1,num2){
    return num1 - num2;
};
var subtractResult = subtract(4,9);
console.log(subtractResult);


function rand(){
   var num = Math.floor((Math.random() * 10)+ 2);
   console.log(num);
}
rand();

var randNum = Math.floor((Math.random()* 30 )+ 1);
console.log(randNum);