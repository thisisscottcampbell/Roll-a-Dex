const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TechSchema = new Schema({
  user : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
    //'ref' refers to the collection in the database
  },
  title: { 
    type: String
  },
  note: {
    type: String
  },
  date: {
    type: Date,
    default: new Date().toString().slice(0, 15)}
  //video: ...
});


module.exports = mongoose.model('Tech', TechSchema);