// Question 1
//Write the function printInt(n) 
//taking one parameter n and print all natural numbers from 
// 1 to n in console.
function printInt{n}
//Using a loop print from 1 to n
//start: 1
var i = 1;
//stop; n
//while(i <=n) {
// console.log.log(i)
//   // step: +1
//  i++;
// }
for(var x=1;x<=n;x++){
console.log(x);
}

//Question 2
//Write the function printIntRev(n)
// taking one parameter n
// and  print all natural numbers 
// in reverse in console (from n to 1).



// print(10)
function printIntRev{n}{
    for(var x=1;x<=n;x++){
    console.log(x);
    }

function checkInput(x) {
if(...) || ... ||...){ }
    return typeof x;    
} else {
    return -1;
}
    // checkInput(5) ====> ‘number’
    // checkInput(‘hello’)======> ‘string’
    // checkInput(‘5’) ======> ‘string’
    // checkInput(true)=====> boolean
    // checkInput([1,2,3,4]) =====> -1