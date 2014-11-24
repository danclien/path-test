var path = require('./path.js');

var userRoute = function(id) {
  console.log(id);
};

path('/user/:id', userRoute);
