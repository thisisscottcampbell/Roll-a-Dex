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
    type: String
    //default: Date.now
  }
  //video: ...
});


module.exports = mongoose.model('Tech', TechSchema);