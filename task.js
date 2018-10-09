function Task (name, due, desc) {
  this.userID = null;
  this.completed = false;
  this.taskID = null;

  this.taskName = name;
  this.dueDate = due || null;
  this.description = desc;
  this.addedDate = new Date();
};


// TESTING GROUND - Using task 3 as example //
// var taskNumber1 = new Task("Task 1", "Tomorrow", "This is task number 1") ;
//
// var customName = $("#tempTaskName");
// customName.text("My Custom Task Title");
//
// var customDueDate = $("#tempDueDate");
// customDueDate.text("Due Tomorrow");
//
// var customDescription = $("#tempTaskDescription[title='tempDescription']");
// customDescription.attr("title", "Stuff to do");
