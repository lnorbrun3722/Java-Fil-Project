var filter = document.querySelector("#filter");

filter.addEventListener("keyup", filterNames);

function filterNames(){
    var value = filter.value;
    var names = document.querySelectorAll("li a");
    for(var i=0;i<names.length;i++){
        if(names[i].innerText.toUpperCase().includes(value.toUpperCase())) {
            names[i].parentElement.style.display ="block"
        }  else {
            names[i].parentElement.style.display ="none"
        }
    }        

}
