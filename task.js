function Task (name, due, desc, taskID) {
  this.userID = null;
  this.completed = false;

  //be sure to switch the taskID designations when we hook up a real database
  this.taskID = taskID;
  this.taskName = name;
  this.dueDate = due || null;
  this.description = desc;
  this.addedDate = new Date();
};


// TESTING GROUND - Using task 3 as example //
var taskNumber1 = new Task("Task 1", "Tomorrow", "This is task number 1" , 1) ;
//
// var customName = $("#tempTaskName");
// customName.text("My Custom Task Title");
//
// var customDueDate = $("#tempDueDate");
// customDueDate.text("Due Tomorrow");
//
// var customDescription = $("#tempTaskDescription[title='tempDescription']");
// customDescription.attr("title", "Stuff to do");
