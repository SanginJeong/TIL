const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
  const database = client.db('practiceCRUD');
  const inventory = database.collection('inventory');
  const students = database.collection('student');
  // 1-1. 추가하기 insertOne
  // const data = {item : 'canvas', qty: 100, tags: ['cotton'], size: {h:28, w:35.5, uom:'cm'}};
  // const dataResult = await inventory.insertOne(data);

  // 1-2. 많이 추가하기 insertMany
  // const dataList = [
  //   {item: 'canvas', qty: 100, size: { h: 28, w: 35.5, uom: 'cm' }, status: 'A'},
  //   {item: 'journal', qty: 25, size: { h: 14, w: 21, uom: 'cm' }, status: 'A'},
  //   {item: 'mat', qty: 85, size: { h: 27.9, w: 35.5, uom: 'cm' }, status: 'A'},
  //   {item: 'mousepad', qty: 25, size: { h: 19, w: 22.85, uom: 'cm' }, status: 'P'},
  //   {item: 'notebook', qty: 50, size: { h: 8.5, w: 11, uom: 'in' }, status: 'P'},
  //   {item: 'paper', qty: 100, size: { h: 8.5, w: 11, uom: 'in' }, status: 'D'},
  //   {item: 'planner', qty: 75, size: { h: 22.85, w: 30, uom: 'cm' }, status: 'D'},
  //   {item: 'postcard', qty: 45, size: { h: 10, w: 15.25, uom: 'cm' }, status: 'A'},
  //   {item: 'sketchbook', qty: 80, size: { h: 14, w: 21, uom: 'cm' }, status: 'A'},
  //   {item: 'sketch pad', qty: 95, size: { h: 22.85, w: 30.5, uom: 'cm' }, status: 'A'}
  // ]

  // const dataList = [
  //   {_id: 1, test1: 95, test2: 92, test3: 90, modified : new Date('01/05/2020')},
  //   {_id: 2, test1: 98, test2: 100, test3: 102, modified : new Date('01/05/2020')},
  //   {_id: 3, test1: 95, test2: 110, modified : new Date('01/04/2020')}
  // ]
  // const dataResult = await students.insertMany(dataList);
  // const dataResult = await inventory.insertMany(dataList);
  
  // 2-1. find (모든 데이터 찾기)
  // const dataResult = await inventory.find().toArray();

  // 2-2. find (원하는 데이터만 찾기)
  // const dataResult = await inventory.find({item: 'mousepad'}).toArray();
  
  // 2-3. find (특정 데이터 찾아왔는데 원하는거만 보고싶을 때) 0이 보기싫은거 1이 보고싶은거
  // ex) 아이디를 제외하고 가져오고싶으면 _id 0을 주고, 나머지는 보임
  // const dataResult = await inventory.find({item: 'mousepad'}).project({tags:1, _id: 0}).toArray();

  // 2-4-1. find (status가 D인 데이터 찾기)
  // const dataResult = await inventory.find({status:'D'}).toArray();
  
  // 2-4-2 find (status가 'A'이고 qty가 25인 데이터 찾기)
  // const dataResult = await inventory.find({status:'A', qty: {$eq:25}}).toArray();

  // 2-4-3 find (status가 A또는 D인 데이터 찾기)
  // const dataResult = await inventory.find({status: {$in : ['A','D']}}).toArray();

  // 2-4-4 find (status가 A이고 qty가 30보다 작은 데이터 찾기)
  // const dataResult = await inventory.find({status:'A', qty: {$lt:30}}).toArray();
  
  // 2-4-5 find (status가 D이거나 qty가 30보다 작은 데이터 찾기)
  // const dataResult = await inventory.find({$or: [{status:'D'} , {qty: {$lt: 30}}]}).toArray();
  
  // 2-4-6 find (size에 uom이 'in' 인 데이터 찾기)
  // const dataResult = await inventory.find({'size.uom' : 'in'}).toArray();
  
  // 2-4-7 find (size에 h가 25을 초과하는 데이터 찾기)
  // const dataResult = await inventory.find({'size.h' : {$gt : 25}}).toArray();
  
  
  // 3-1-1 Update (student 컬렉션에서 id가 3인 학생에게 test3 : 98을 부여하기)
  // const dataResult = await students.updateOne( {_id : 3}, [ {$set : {test3 : 98}}]);

  // 3-1-2 Update (모든 데이터의 test1의 점수를 0으로 세팅하고 status:'modified' 라는 필드를 추가하기)
  // const dataResult = await students.updateMany({ }, [ {$set : { status : 'modified' , test1 : 0}}])

  // 3-2-1 Delete ( test 2 점수가 92점인 학생 삭제)
  // delete는 해당 조건을 만족하는 데이터 를 통째로 삭제
  // const dataResult = await students.deleteOne({test2:92});
  
  // 3-2-2 Delete ( test 1 점수가 0점인 학생 모두 삭제)
  // const dataResult = await students.deleteMany({test1:0})
  console.log(dataResult);
}
run();