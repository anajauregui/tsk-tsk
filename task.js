function Task(taskName, dueDate, description, taskID, dateAdded) {
  this.userID = null;
  this.completed = false;

  //be sure to switch the taskID & dateAdded designations when we hook up a real database

  this.taskName = taskName;
  this.dueDate = new Date(dueDate).toDateString();
  this.description = description;
  this.taskID = taskID;
  this.dateAdded = new Date(dateAdded).toDateString();//eventually this will just be new Date() with no param passed in and that will be the current date.
};


// TESTING GROUND - Using task 3 as example //
var taskNumber1 = new Task("Task 1", "october 30", "This is task number 1" , 1, "oct 2 2018") ;
var taskNumber2 = new Task("Task 2", "feb 17 2018", "This is task number 2" , 2, "oct 8 2018") ;
var taskNumber3 = new Task("Task 3", "nov 17 2018", "This is task number 3" , 3, "oct 7 2018") ;
//task 4 has an empty string passed in as if a user had left an empty form field fot the due date.
var taskNumber4 = new Task("Task 4", " ", "This is task number 4", 4, "oct 4 2018");
var taskNumber5 = new Task("Task 5", "oct 9 2018", "This is task number 5", 5, "oct 7 2018");
var taskNumber6 = new Task("Task 6", "oct 7 2018", "This is task number 6", 6, "oct 10 2018");
//
// var customName = $("#tempTaskName");
// customName.text("My Custom Task Title");
//
// var customDueDate = $("#tempDueDate");
// customDueDate.text("Due Tomorrow");
//
// var customDescription = $("#tempTaskDescription[title='tempDescription']");
// customDescription.attr("title", "Stuff to do");
