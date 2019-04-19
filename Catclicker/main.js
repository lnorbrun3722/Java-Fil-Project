// add event listener for andy and bobby nad jacky image
document.querySelector("#andyImg").addEventListener("click", onClickAndy);
document.querySelector("#bobbyImg").addEventListener("click", onClickBobby);
document.querySelector("#jackyImg").addEventListener("click", onClickJacky);
// Declare variables for andy and bobby and jacky
let counterAndy = 0;
let counterBobby = 0;
let counterJacky = 0;

// Select counter element for andy and bobby and jacky
const counterEleAndy = document.querySelector("#andyCounter");
const counterEleBobby = document.querySelector("#bobbyCounter");
const counterEleJacky = document.querySelector("#jackyCounter");
counterEleAndy.textContent = counterAndy;
counterEleBobby.textContent = counterBobby;
counterEleJacky.textContent = counterJacky;

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