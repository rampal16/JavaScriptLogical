// Group objects by a specific property
const inventory = [
  { name: "apples", category: "fruit" },
  { name: "bananas", category: "fruit" },
  { name: "carrots", category: "vegetables" }
];

const result = Object.groupBy(inventory, ({ category }) => category);

console.log(result)
/* 
Result: {
  fruit: [ { name: "apples", ... }, { name: "bananas", ... } ],
  vegetables: [ { name: "carrots", ... } ]
}
*/