function Task (name, due, desc) {
  userID = null;
  completed = false;
  taskID = null;

  taskName = name;
  dueDate = due || null;
  description = desc;
  addedDate = new Date();
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
