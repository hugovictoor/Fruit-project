const mongoose = require("mongoose");
let mongoAtlasUri = "mongodb+srv://silvestrinivictor:w2Pg0RlF3WCok0Zv@cluster0.wlzdvwm.mongodb.net/test";
mongoose.set('strictQuery', true);

try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
    );

  } catch (e) {
    console.log(e);
  }

  const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
  });

  const Fruit = mongoose.model("Fruit", fruitSchema);

  const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
  });

  //fruit.save();

  const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
  });

  const Person = mongoose.model("Person", peopleSchema);

  const person = new Person({
    name: "John",
    age: 37
  });

  //person.save();

//InsertMany inserts an array of objects to one model

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 9,
    review:"Awesome"
});

const orange = new Fruit({
    name: "Orange",
    rating: 8,
    review:"Depends on which orange we're talking"
});

const banana= new Fruit({
    name: "Banana",
    rating: 6,
    review:"Average fruit."
});

//Fruit.insertMany([kiwi, orange, banana]);

Fruit.find({}, function(err, fruits){
 if (err) {
    console.log(err)
 } else {
    console.log(fruits)
 }
});