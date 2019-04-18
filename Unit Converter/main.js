const input = document.querySelector("#input");

const unit = document.querySelector("#unit");
input.addEventListener("input", convert);
unit.addEventListener("input", convert);

const convert () {
    const value = input.value;
    const output = document.querySelector("#output");
    (value !== "")?
   if (value !== "") {
        output.style.display = "block";
     } else {
        output = style.display = "none";
     }
    }
document.querySelector("#gram").textContent = value * 453.592;
document.querySelector("#kilogram").textContent = value * 453.592 /1000;
document.querySelector("#ounce").textContent = value * 16;

