//business logic
function Task(title, description, dueDate) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
}
Task.prototype.toDo = function() {
  return this.title + " - " + this.dueDate;
}

// //interface
$(document).ready(function() {
  $("form#taskForm").submit(function(event) {
  event.preventDefault();

    var inputtedTask = $("input#newTask").val();
    var inputtedDescription = $("input#newDescription").val();
    var inputtedDate = $("input#newDate").val();
    var newTask = new Task(inputtedTask, inputtedDescription, inputtedDate);

    // $("ul#tasksCompleted").append("<li><span class='listTask' id='" + newTask.title + "'>" + newTask.toDo() + "</span></li><button type='delete' class='btn btn-delete'>delete</button>");
    $("ul#tasksCompleted").append("<li><span class='listTask'>" + newTask.toDo() + "</span>  <span class='itemDelete'>Delete</span></li>");

    $('#tasksCompleted').on('click', '.itemDelete', function() {
        $(this).closest('li').remove();
    });

    $("input#newTask").val("");
    $("input#newDescription").val("");
    $("input#newDate").val("");
//
    $(".listTask").last().click(function() {
      $(".showTasks").toggle();
      $(".showTasks h2").text(newTask.toDo());
      $(".taskTitle").text(newTask.title);
      $(".description").text(newTask.description);
      $(".date").text(newTask.dueDate);
    });
//
  });
});
