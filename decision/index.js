var height = 190;
if(height > 100){
    console.log('higher than 100');
    
}
else if(height< 180){
    console.log('lower than 180');
    
}
else if(height == 190){
    console.log('exactly 190');
    
}
 if(height === 190){
    console.log('exactly 190 and same type');
    
}

//string length
var str = "hello world!";
var nr = str.length;
if(nr == 12){
   console.log('12 words');
    
}
else if(nr < 10){
    console.log('less words');
    
}
else {
    console.log('more words');
    
}
//control value that are less than 50
var x = 50;
if(x < 50){
    console.log('less than 50');
    
}
if(x > 50){
    console.log('more than 50');
    
}
if(x == 50){
    console.log('exactly 50');
    
}
// control if value is less than or equal 24
var y = 24;
if(y<20 && y>10){
    console.log('more than 12 and less than 20');
    
}
if(y>20 && y<30){
    console.log('more than 20 and less than 30');
    
}
if(y<24 || y==24){
    console.log('less than or equal 24');
    
}
//swich case
var myValue = 'hello';
switch (myValue) {
    case 'hello':
        console.log('Say Hello');
        
        break;
    case 'goodbye':
        console.log('Say Goodbye');
        break;
    case 'seeya':
        console.log('Say see ya later aligator');        

    default:
        break;
}
// function
function myfunction(word){
    if(word.length > 10 && word[0]=='p'){
        return alertFunc('correct');
    }
    if(word.length < 10  || word[0]=='c'){
        return alertFunc('wrong');
    }
    
}
function alertFunc(word){
    alert(word);
}
//myfunction('perfect answer');