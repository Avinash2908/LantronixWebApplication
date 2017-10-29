'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('Users');


/**
 * Function which takes username(optional param) as input. Gets the user details for username if present.
 * Else gets all the user details. 
 */
var getUserData = (username, callback) => {
  let condition = username ? { username: username } : {};
  User.find(condition, callback);
}

/**
 * Service to get list of users. Used this service for checking users in DB
 */
exports.getUsers = function (req, res) {
  console.log('Inside get Users');
  getUserData(function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

/**
 * Service to create an user. Checks if the username is already present. If not creates the user.
 */
exports.createUser = function (req, res) {
  console.log('Body : ', req.body);
  var user = new User(req.body);

  var onGettingUserDetails = function (err, userData) {
    console.log("user Details : ", userData);
    if (userData.length) {
      res.status(501).json({"errorMsg" : "User Already exists! Please try different Username"});
    } else {
      user.save(function (err, user) {
        if (err)
        res.status(500).json({"errorMsg" : err});
        res.json({ "message": "A verification mail has been sent to your registered mail."});
      });
    }
  };

  getUserData(user.username, onGettingUserDetails);

};

/**
 * Service to get user by username.
 */
exports.getUser = function (req, res) {
  getUserData(req.params.username, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
}

