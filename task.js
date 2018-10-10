function Task(taskName, dueDate, description, taskID) {
  this.userID = null;
  this.completed = false;

  //be sure to switch the taskID designations when we hook up a real database

  this.taskName = taskName;
  this.dueDate = new Date(dueDate.toString()) || null;
  this.description = description;
  this.taskID = taskID;
  this.addedDate = new Date();
};


// TESTING GROUND - Using task 3 as example //
var taskNumber1 = new Task("Task 1", "october 10 2017", "This is task number 1" , 1) ;
var taskNumber2 = new Task("Name", "feb 17 2018", "This is task number 2" , 2) ;
var taskNumber3 = new Task("Three", "nov 17 2018", "This is task number 3" , 3) ;
var taskNumber4 = new Task("Four", "" , "This is task number 4" , 5) ;
//
// var customName = $("#tempTaskName");
// customName.text("My Custom Task Title");
//
// var customDueDate = $("#tempDueDate");
// customDueDate.text("Due Tomorrow");
//
// var customDescription = $("#tempTaskDescription[title='tempDescription']");
// customDescription.attr("title", "Stuff to do");
