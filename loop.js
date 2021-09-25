//for loop:
let scores=[
    {
      name: "Akash",
      marks: 32,
    },
    {
      name:"bhavana",
      marks:57,
    },
    {
      name: "Caterine",
      marks: 22,
    },
    {
      name: "Divya",
      marks: 21,
    },
    {
        name: "Elakiya",
        marks: 91,
    },
];
console.log("noraml loop")
for(let i=0;i<scores.length;i++){
    
    console.log(scores[i])
}
console.log("for in loop")
for(let index in scores){
    
    console.log(scores[index])
}
console.log("for of loop")
for(let value of scores){
    
    console.log(value)
}
console.log("for each loop")
scores.forEach(key=>
    console.log(key))
