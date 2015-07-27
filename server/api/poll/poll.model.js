'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({
  topic: String,
  labels: Array,
  data: Array
});

module.exports = mongoose.model('Poll', PollSchema);