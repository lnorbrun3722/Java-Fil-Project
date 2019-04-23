class cat {
constructor(name, picture, clicks = 0) {
    this.name = name;
    this.picture = picture;
    this.clicks = clicks;
}
}
const cat1 = new cat("Andy", "img/cat.jpg");
const cat2 = new cat("Cliff", "img/cat2.jpg");
const cat3 =new cat("Alice", "img/cat3.jpg");
const cat4 =new cat("Bobby", "img/cat4.jpg")
const cat5 =new cat("Saxby", "img/cat5.jpg")

 const cats = [cat1, cat2, cat3, cat4, cat5];
const leftColumn = document.createElement(".col-4");

const ul =document.createElement("ul");
ul.className = "list-group"

for(let cat of cats) {
    const li = document.createElement("li");
    li.className ="list-group-item"
    li.textContent =cat.name;
    li.addEventListener("click", ()=>{
        displayCat(cat);
    })

    ul.appendChild(li);
}
    leftColumn.appendChild(ul); 

        const displayCat = (cat) => {
            const rightColumn = document.querySelector(".col-8");
            rightColumn.innerHTML = "";
            const h1 = document.createElement("h1");
            h1.textContent = cat.name;
            rightColumn.appendChild(h1);

            const img = document.createElement("img");
            img.setAttribute("src",cat.picture);
            img.setAttribute('alt', "cat");
            rightColumn.appendChild(img);

            const h2 =document.createElement("h2");
            h2.textContent = Clicks: ${cat.clicks};
            rightColumn.appendChild(h2);
        }

    } )
    ul.appendChild(li);
}
leftColumn.appendChild(ul);


}