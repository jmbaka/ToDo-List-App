const inputField = document.getElementById("inputField");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

// Get stored todo items from localStorage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Display stored todo items
for (let i = todos.length - 1; i >= 0; i--) {
	addTodoItem(todos[i]);
}

addBtn.addEventListener("click", function() {
	// Get input value
	const todoText = inputField.value.trim();

	// Check if input value is not empty
	if (todoText !== "") {
		// Add todo item
		addTodoItem(todoText);

		// Add todo item to localStorage
		todos.unshift(todoText);
		localStorage.setItem("todos", JSON.stringify(todos));

		// Reset input field
		inputField.value = "";
	}
});

list.addEventListener("click", function(e) {
	if (e.target.tagName === "LI") {
		// Remove todo item
		e.target.remove();

		// Remove todo item from localStorage
		todos.splice(todos.indexOf(e.target.textContent), 1);
		localStorage.setItem("todos", JSON.stringify(todos));
	}
});

function addTodoItem(text) {
	// Create new todo item
	const todoItem = document.createElement("li");
	todoItem.textContent = text;

	// Add todo item to list
	list.insertBefore(todoItem, list.firstChild);
}
