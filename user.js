//user prototype & logic
function User(userID, userName, email, password) {
  this.userID = userID;
  this.userName = userName;
  this.email = email;
  //lolol, obviously we will NOT be storing passwords like this once we know which stack we'll be working with.
  this.password = password;
};



//testable users
var user1 = new User(1, 'oona' , 'fake@email.com' , 'lololuwish');
var user2 = new User(1, 'ana' , 'fakea@email.com' , 'hahatryagain');
var user3 = new User(1, 'cody' , 'fakec@email.com' , 'backoffyall');
