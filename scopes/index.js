var globalName ='John Doe';
function greet(){
    var globalName = 'Elvis';
    console.log(globalName); //local variable
};
greet();
console.log(globalName); //global variable 

if(true){
    const myValue = 12;
    console.log(myValue);
}
console.log(myValue);

//global scope creates a higher risk of naming conflicts.

//local scope it creates when the function is run and removes them 
//efter the function is done.

//var declared with inside a block {} can be accessed from outside the block
//let declared with inside a block {} can not be accessed from outside the block. 
// javascript did not have block scope

//variables defined with const behave like 'let' variable,
//except they cannot be reassigned.