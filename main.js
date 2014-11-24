var path = require('./path');

var rootRoute = function root() {
  console.log("Hello!");
}

var usersRoute = function userRoute() {
  console.log("/users/")
};


var userRoute = function userRoute(id) {
  console.log(id);
};

path('/users', usersRoute);
path('/user/:id', userRoute);
path(rootRoute);