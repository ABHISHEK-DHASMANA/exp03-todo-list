// 1. Select elements from the page (DOM)
var input = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var list = document.getElementById("taskList");

// 2. Function to add a task
function addTask() {
  var text = input.value.trim();

  if (text === "") {
    alert("Please write a task first!");
    return;
  }

  // create new elements
  var li = document.createElement("li");
  var span = document.createElement("span");
  var doneBtn = document.createElement("button");
  var delBtn = document.createElement("button");

  span.textContent = text + " ";
  doneBtn.textContent = "Done";
  delBtn.textContent = "Delete";

  // 3. Mark task as completed
  doneBtn.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  // 4. Delete task
  delBtn.addEventListener("click", function () {
    li.remove();
  });

  // add elements to the page
  li.appendChild(span);
  li.appendChild(doneBtn);
  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";   // clear the input box
}

// 5. Run addTask when Add button is clicked
addBtn.addEventListener("click", addTask);

// Also run addTask when Enter key is pressed
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
