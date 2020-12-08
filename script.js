function appendItem(listName, item) {
  listName.push(item);
}

function insertItem(listName, index, item) {
  listName.splice(index, 0, item);
}

function removeItem(listName, index) {
  listName.splice(index, 1);
}

var bList = ["to", 5, "po"];
var title = document.getElementById("titleText");
title.innerHTML = "Hello!";
appendItem(bList, bList[2] + "ta" + bList[0]); 
insertItem(bList, 2-1, "go");
removeItem(bList, 2);
console.log(bList);
//document.getElementById("titleText").innerHTML = "New text!";