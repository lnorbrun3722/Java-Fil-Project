//write the function print
1)
function printInt(n) {
    for(var i=1;<=n;i++){
        console.log(i);
    }
    }

2)

function printRev(n) {
    for(var x=n;x>=i;--){
        console.log(x);
    }
}

3)
function= checkInput(x) {
if(type of x === "number" || typeof x=== "strring" ||typeof x ==="boolean") {
    return typeof x;
}else { return -1;
}
4)
// store the answer
var solution =0;
function simpleEvenAdding(num) {
for(var i=1; i<=num;i++){
    if(i % 2 === 0) {
solution += i;

return solution;
console.log(simpleEvenAdding(12));


5)

var words = str.split("");
for(var i=0;i<words.length;i++){
var upperWord = words[i].replace(words[i][0].toUpperCase());
solution += " " + upperWord;
}
return solution.slice(1);
console.log(letterCapitalize("hello world"));
}

6)
function simpleReverse(str){
var strArray = str.split("");
return revArray.join("");

console.log(simpleReverse("Good Morning"));

}
7)
function findDiff(arr) {

var min = Math.min(...arr);

return max - min;
console.log(findDiff([1,2,3,4,5,10,2]));
}

8
function timeConvert(num) {
var hour =parseInt(num/60);
var minutes= num % 60
return hour + ":" + minutes}

9)
function findStr(str,long) {
    var splitedArray = long.split(str);
    return splitedArray.length -1;
}
10)
function selfDividingNumbers(left, right){
var solution = [];
for (var i=left;i<=right;i++){
if(isselfDividing(i)){solution.push(i)
    }
}
return solution;

11)
function moveZeros(nums) {

var counter = 0;
for(var i=0)
var solution = [];

for(var i=0;i<nums.length;i++) {
 if(nums[i] ===0){
counter++;
 }else {
solution.push(nums[i]);
for(var j=counter;j>0;j--){
    solution.push(0);

 }
console.log(moveZeros([1,0,21,4,0,0,4]));


12)

function average(nums) {
if (nums.length === 0) {
return 0;
}

var sum = 0;
for(var i=0; i<nums.length;i++){

}
console.log(averaGE([]));