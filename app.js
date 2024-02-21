const students = [
    {name: "Richard", age: 25, main: "Viego"},   
    {name: "Zoro", age: 20, main: "Master Yi"},
    {name: "Canyon", age: 19, main: "Graves"},
    {name: "Ryuma", age: 20, main: "Rengar"},
];

const results = [];

for(let i = 0; i < students.length; i++){
    results.push(students[i].name)
}

console.log(results);
