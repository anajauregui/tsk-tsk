function task (name, due, desc) {
  userID = null;
  completed = false;
  taskID = null;

  var dateAdded = new Date();
  taskName = name;
  dueDate = due;
  description = desc;
  addedDate = dateAdded.toDateString();
};


// TESTING GROUND //
var taskNumber1 = new task("Task 1", "Tomorrow", "This is task number 1") ;

var customName = $("#tempTaskName");
customName.text("My Custom Task Name");
