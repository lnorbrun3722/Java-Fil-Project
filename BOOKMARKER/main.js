document.querySelector("form").addEventlistener("submit",saveBookmark);

//save bookmarks
function saveBookmark(e) {
    //prevent from page reloading
    e.preventDefault
    console.log("hello from saveBookmark");
}
//get the sitename and site url
var siteName= document.querySelector("#siteName").value;
var siteName=document.querySelector("#siteUrl").value;

//create a bookmark object
var bookmark = {
    name: siteName,
    url: siteUrl
}
//check if the local storage is empty
if(localStorage.getItem("bookmarks")===null) {
    //Init bookmarks array
    var bookmarks =[];
    //Adding first bookmarks to localstroage
    localStorage.setItem("bookmarks"), JSON.stringify(bookmarks)));
}else {
//get current bookmarks from local storage
var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
bookmarks.push(bookmark);
//set bookmarks to localStorage
localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
//Reset the form
document.queryCommandEnabled.Selector("form").reset();

}