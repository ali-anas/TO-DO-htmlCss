// create references t page elements
let addButton = document.getElementById("add");
let clearButton = document.getElementById("clear");
let taskInput = document.getElementById("task");
let taskList = document.getElementById("taskList");
let complete = document.getElementById("completeList");


// add new item to task list
addButton.addEventListener("click", function() {
	let task = taskInput.value;
	// Don't add an empty string
	if(task.trim()) {
		// add new task list item
		let newItem = document.createElement("LI");
		task += "	";
		let taskText = document.createTextNode(task);
		newItem.appendChild(taskText);
		// clear text input box
		taskInput.value = "";
		// TODO: add checkbox button
		let completeButton = document.createElement("BUTTON");
		completeButton.innerHTML = "Mark Completed";
		completeButton.className = "complete";
		
		completeButton.addEventListener("click", moveToCompleted);
		
		// add completeButton(done) to task item
		newItem.appendChild(completeButton);
		taskList.appendChild(newItem);
	}
	else {
		alert("Task cannot be empty");
	}
});

// clear entire list
clearButton.addEventListener("click", function() {
	taskList.innerHTML = "";
	complete.innerHTML = "";
});



function moveToCompleted(e) {
	// get the parent list item to move
	let taskItem = e.target.parentElement;
	taskList.removeChild(taskItem);
	// remove "completeButton" from task item
	taskItem.removeChild(taskItem.childNodes[1]);
	let removeButton = document.createElement("BUTTON");
	removeButton.addEventListener("click", removeTask);
	removeButton.innerHTML = "Remove";
	removeButton.className = "remove";
	// add remove button to task;
	taskItem.style.backgroundColor = "#28a428";
	taskItem.appendChild(removeButton);
	complete.appendChild(taskItem);
}

function removeTask(e) {
	// get the parent list item to remove
	let taskItem = e.target.parentElement;
	complete.removeChild(taskItem);
}
