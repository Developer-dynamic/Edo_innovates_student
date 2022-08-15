console.log(1);
console.log(2);

console.log('hello');
console.log('My anme is Enadiakhe');

let email = 'dynamicheartphotography@gmail.com'

let firstName = 'Enadiakhe';
let lastName = 'Ighodaro';

console.log(firstName);
console.log(lastName);
console.log(email);
let FulName = firstName + ' '+ lastName;
console.log(FulName)
// JavaScript count from zero
// to output the first letter of  varieble
//  FulName to the console  we will 
//  use 0 to count the very first leter
//   from the left, 1 will be 
//ther second
console.log(FulName[0]);
// we can also count the lent of a string 
// by adding length to the variable E.G

//the string length ia the property of a string
console.log(FulName.length);

//this is a function or method of a string
console.log(FulName.toUpperCase());

// a funcion can be stored in varieble for later use
let fulnameUPPER = FulName.toLowerCase();

console.log(fulnameUPPER);

//this is passing argument to a string
//this will out put the position of
// the augument on the screen
 index = email.indexOf('o');
 console.log(index);

 let name = 'Nadia';
 let age = 33;

 // this is a template string
 let result = `My name is ${name} and i am ${age} years old and my real name is ${FulName}`;

 console.log(result);

 let html = `<h1>${FulName}</h1>
            <p>is just a developer</p>
            <p>and he is ${age} years old</p>`;

console.log(html);
