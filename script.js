function appendItem(listName, item) {
  listName.push(item);
}

var bList = ["to", 5, "po"];
appendItem(bList, bList[2] + "ta" + bList[0]); 
//insertItem(bList, 2-1, "go");
//removeItem(bList, 2);
console.log(bList);