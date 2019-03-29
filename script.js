var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var li = document.querySelectorAll("li");
li.forEach((l) => {
	listItemMaker(l);
});





// listItem
function listItemMaker(listNode) {
	addEventListenerStrikethrough(listNode);
	addDeleteButton(listNode);
}

function addEventListenerStrikethrough(listTag){
	listTag.addEventListener("click", ()=>{
		listTag.classList.toggle("done");
	})
}
// listItem - delete button
function addDeleteButton(listTag){
	var deleteButton = document.createElement("button");
	deleteButton.innerHTML = "Delete";
	addEventListenerForDeleteButton(deleteButton);

	listTag.appendChild(deleteButton);
}

function addEventListenerForDeleteButton(deleteButton) {
	deleteButton.addEventListener("click", ()=>{
		var listNode = deleteButton.parentElement;
		var ulTag = listNode.parentElement;
		ulTag.removeChild(listNode);
	});
}







function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");

	li.appendChild(document.createTextNode(input.value));
	listItemMaker(li);

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

