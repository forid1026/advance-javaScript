const numbers = [4, 5, 6, 7, 8];
// const output = [];
// for( let i =0; i < numbers.length; i++){
//     const element = numbers[i];
//     const square = element * element;
//     output.push(square);
// }
// console.log(output)

// const result = numbers.map(function(element){
//     return element * element;
// })

const result = numbers.map(element => element * element);
console.log(result);

const values = [1, 9, 16, 25];
const result2 = values.map(Math.sqrt);
console.log('sqrt', result2);
//filter 
const bigger = numbers.filter( x => x % 2 === 0);
console.log('Even Number', bigger);

//find output one element
const find = numbers.find(x => x > 5);
console.log(find); 

//foreach

const persons = [
    { firstName : "Malcom", lastName : "Reynolds"},
    {firstName : "Kaylee", lastName : "Frye"}
];

const getFUllName = item =>{
    const fullName = [item.firstName, item.lastName].join(" ");
    return fullName;

} 

const result3 = persons.map(getFUllName);
console.log(result3);