const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;const arrayOfPeople = [
    { name: 'Alice', age: 30, favoriteFoods: ['Sushi', 'Pasta'] },
    { name: 'Bob', age: 22, favoriteFoods: ['Steak', 'Ice Cream'] }
  ];
  
  Person.create(arrayOfPeople, function(err, people) {
    if (err) return console.error(err);
    console.log('People created successfully:', people);
  });Person.findOne({ favoriteFoods: 'Pizza' }, function(err, person) {
    if (err) return console.error(err);
    console.log('Person found:', person);
  });const personId = 'your_person_id_here';


  Person.findById(personId, function(err, person) {
    if (err) return console.error(err);
    console.log('Person found:', person);
  });Person.findById(personId, function(err, person) {
    if (err) return console.error(err);
  

    person.favoriteFoods.push('Hamburger');
    person.save(function(err, updatedPerson) {
      if (err) return console.error(err);
      console.log('Person updated:', updatedPerson);
    });
  });


  Person.findOneAndUpdate(
    { name: 'John Doe' },
    { age: 20 },
    { new: true },
    function(err, updatedPerson) {
      if (err) return console.error(err);
      console.log('Person updated:', updatedPerson);
    }
  );

Person.findByIdAndRemove(personId, function(err, removedPerson) {
  if (err) return console.error(err);
  console.log('Person removed:', removedPerson);
});


Person.remove({ name: 'Mary' }, function(err, result) {
    if (err) return console.error(err);
    console.log('Persons removed:', result);
  });

  Person.find({ favoriteFoods: 'Burritos' })
  .sort({ name: 1 })
  .limit(2)
  .select('-age')
  .exec(function(err, data) {
    if (err) return console.error(err);
    console.log('People found:', data);
  });
