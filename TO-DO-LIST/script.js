var taskList = [];

function addingnewTask() {
	var input = document.getElementById("input");
	if (input.value === "") {
		alert("INVALID Please Enter The Task.");
	} 
    else 
    {
		taskList.push(input.value);
		input.value = "";
		displayTasks();
	}
}

function displayTasks() {
	var list = document.getElementById("list");
	list.innerHTML = "";
	for (var i = 0; i < taskList.length; i++) {
		var task = taskList[i];
		var listItem = document.createElement("li");
		listItem.innerHTML = '<span class="task-text">' + task + 
        '</span><span class="buttons"><button onclick="deleteTask(' + i + ')">Delete</button><button onclick="editTask(' + i + ')">Edit</button><button onclick="completeTask(' + i + ')">Complete</button></span>';
		if (listItem.classList.contains("completed")) {
			listItem.querySelector(".task-text").style.textDecoration = "line-through";
		}
		list.appendChild(listItem);
	}
}

function deleteTask(index) {
	taskList.splice(index, 1);
	displayTasks();
}

function editTask(index) {
	var listItem = document.getElementsByTagName("li")[index];
	listItem.classList.add("editing");
    var taskText = listItem.querySelector(".task-text").innerHTML;
listItem.innerHTML = '<input type="text" value="' + taskText + '"><span class="buttons"><button onclick="saveTask(' + index + ')">Save</button><button onclick="cancelEdit(' + index + ')">Cancel</button></span>';
}

function saveTask(index) {
var listItem = document.getElementsByTagName("li")[index];
var newTaskText = listItem.querySelector("input[type=text]").value;
taskList[index] = newTaskText;
listItem.innerHTML = '<span class="task-text">' + newTaskText + '</span><span class="buttons"><button onclick="deleteTask(' + index + ')">Delete</button><button onclick="editTask(' + index + ')">Edit</button><button onclick="completeTask(' + index + ')">Complete</button></span>';
if (listItem.classList.contains("completed")) {
listItem.querySelector(".task-text").style.textDecoration = "line-through";
}
}

function cancelEdit(index) {
var listItem = document.getElementsByTagName("li")[index];
listItem.classList.remove("editing");
var taskText = taskList[index];
listItem.innerHTML = '<span class="task-text">' + taskText + '</span><span class="buttons"><button onclick="deleteTask(' + index + ')">Delete</button><button onclick="editTask(' + index + ')">Edit</button><button onclick="completeTask(' + index + ')">Complete</button></span>';
if (listItem.classList.contains("completed")) {
listItem.querySelector(".task-text").style.textDecoration = "line-through";
}
}

function completeTask(index) {
var listItem = document.getElementsByTagName("li")[index];
listItem.classList.toggle("completed");
if (listItem.classList.contains("completed")) {
listItem.querySelector(".task-text").style.textDecoration = "line-through";
} else {
listItem.querySelector(".task-text").style.textDecoration = "none";
}
}

displayTasks();