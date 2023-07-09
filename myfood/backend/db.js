
const mongoose = require("mongoose");

const mongoURI = 'mongodb+srv://myfood:myfood123@cluster0.zuzxplj.mongodb.net/myfoodmern?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected!');
    let fetched_data = mongoose.connection.db.collection("fooditems");
    let data = await fetched_data.find({}).toArray()
    let fetcheddata = mongoose.connection.db.collection("foodcategory");
    let catdata = await fetcheddata.find({}).toArray()
    global.fooditems=data;
    global.foodcategory=catdata;
  } 
  catch (error) {
    console.log('err: ', error);
  }
};

module.exports = mongoDB;

