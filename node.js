const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));const Person = require('./models/Person');

const newPerson = new Person({
  name: 'John Doe',
  age: 25,
  favoriteFoods: ['Pizza', 'Burger']
});

newPerson.save(function(err, data) {
  if (err) return console.error(err);
  console.log('Person saved successfully:', data);
});