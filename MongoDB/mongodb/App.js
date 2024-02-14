const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

const run = async() => {
  const database = client.db('firstDB');
  const users = database.collection('users');
  const userList = await users.insertMany([{name:'Park',age:30},{name:'Lee',age:'25'}]);
  console.log('result:' ,userList);
}

run();