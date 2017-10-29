'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Model for User collection of UserDB
 */
var UserSchema = new Schema({
  username: {
    type: String,
    required: 'Kindly enter the username'
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
});

module.exports = mongoose.model('Users', UserSchema);