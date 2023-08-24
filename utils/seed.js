const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./data');

connection.on('error', (err) => err);

connection.on('open', async () => {
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);
  console.log('Seeding complete');
  process.exit(0);
});