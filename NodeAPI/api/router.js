'use strict';

/**
 * Create multiple routes and redirect to respective routes.
 * Created for getting user(s) and creating users.
 */
module.exports = function(app) {
  var userController = require('./controllers/userController');
  console.log('userController : ', userController);

  app.route('/users')
    .get(userController.getUsers)
    .post(userController.createUser);

  app.route('/users/:userID')
    .get(userController.getUser);


};