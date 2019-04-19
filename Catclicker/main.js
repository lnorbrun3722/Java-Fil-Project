// add event listener for andy and bobby nad jacky image
document.querySelector("#andyImg").addEventListener("click", onClickAndy);
document.querySelector("#bobbyImg").addEventListener("click", onClickBobby);
document.querySelector("#jackyImg").addEventListener("click", onClickJacky);
document.querySelector("#bettyImg").addEventListener("click", onClickBetty);
document.querySelector("#weezyImg").addEventListener("click", onClickWeezy);

let counterAndy = 0;
let counterBobby = 0;
let counterJacky = 0;
let counterBetty = 0;
let counterWeezy = 0;




const counterEleAndy = document.querySelector("#andyCounter");
const counterEleBobby = document.querySelector("#bobbyCounter");
const counterEleJacky = document.querySelector("#jackyCounter");
const counterEleBetty = document.querySelector("#BettyCounter");
const counterEleWeezy = document.querySelector("#WeezyCounter");
counterEleAndy.textContent = counterAndy;
counterEleBobby.textContent = counterBobby;
counterEleJacky.textContent = counterJacky;
counterEleBetty.textContent = counterBetty;
counterEleWeezy.textContent = counterWeezy;

function onClickAndy() {
    counterAndy++;
    counterEleAndy.textContent = counterAndy;
}
function onClickBobby() {
    counterBobby++;
    counterEleBobby.textContent = counterBobby;
}
function onClickJacky() {
    counterJacky++;
    counterEleJacky.textContent = counterJacky;
}
function onClickBetty() {
    counterBetty++;
    counterEleBetty.textContent = counterBetty;
}
function onClickWeezy() {
    counterWeezy++;
    counterEleWeezy.textContent = counterWeezy;
}
