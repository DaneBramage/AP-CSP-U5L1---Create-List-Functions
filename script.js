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
var title = document.getElementById("title01");
appendItem(bList, bList[2] + "ta" + bList[0]); 
insertItem(bList, 2-1, "go");
removeItem(bList, 2);
console.log(bList);
title.innerHTML = bList;
//document.getElementById("titleText").innerHTML = "New text!";