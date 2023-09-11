//  Loops are used to repeat a block of code
// While loop
/*
let i = 1; 
// initialize, condition , increment
while(i<=5)
{
    console.log("Hi")
    i++; 
}

// Do while loop

let i = 0;

do
{
    console.log("Hi",i)
    i++;

} while(i<=5);
 

// For loop - if you know the starting and ending point.
 
 for(i=1;i<=5;i++)
 {
    console.log("Hi",i)
 }
 
// Loop inside a loop is called a nested loop

// Every loop has its own advantage and drawback

// 1-100 for loop Examp.

for(let i=1;i<=100;i++);

{
    if(i%3===0)
       console.log(i); 
}
*/
/*
let num = 123456

console.log(num%10);
num = parseInt(num / 10)
console.log(num);

console.log(num%10);
num = parseInt(num / 10)
console.log(num);

console.log(num%10);
num = parseInt(num / 10)
console.log(num);*/

// While loop is the best when you dont know the end

let num = 564782

while(num>0) 

{
    console.log(num%10);
     num = parseInt(num / 10)
}