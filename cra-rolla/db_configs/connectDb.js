const mongoose = require('mongoose');
//const config = require('config');
//const db = config.get('mongoURI');

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://scott123:scott123@cluster0.mwfxl.mongodb.net/test?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  console.log('Mongo DB connected');
  } 

  catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDb;