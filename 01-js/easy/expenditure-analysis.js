/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
 const map1 = new Map();

 for(const item of transactions){
    map1.set(item["category"] , (map1.get(item["category"]) || 0) + item["price"]);
 }
  console.log(map1)
   let list = [];
  for (let [key,value] of map1){
   const obj = {
    category : key,
    totalSpent : value
   }
   list.push(obj);
  }
  // console.log(list);
  return list;
}
transactions = [{
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'Pizza',
}]

calculateTotalSpentByCategory(transactions);
module.exports = calculateTotalSpentByCategory;
