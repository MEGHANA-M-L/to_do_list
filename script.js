function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
      alert("Please enter a task!");
      return;
    }
    
    var listItem = document.createElement("li");
    listItem.textContent = input;
    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.onclick = function() {
      listItem.remove();
    };
    
    listItem.appendChild(deleteButton);
    document.getElementById("taskList").appendChild(listItem);
    
    document.getElementById("taskInput").value = "";
  }
  