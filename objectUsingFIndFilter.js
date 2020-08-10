const students = [
    {id: 22 , name: 'saif'},
    {id: 23 , name: 'Niloy'},
    {id: 27 , name: 'Nayeem'},
    {id: 28 , name: 'Udhas'},
    {id: 29 , name: 'Faisal'},
    {id: 33 , name: 'Mahbub'},
    {id: 38 , name: 'Omio'},
    {id: 40 , name: 'shaba'}
];

const newArray = [];

for( let i = 0; i < students.length; i++){
    const element = students[i];
    const getName = element.name;
    newArray.push(getName);
}
console.log(newArray);


//using arrow function
const names = students.map(s => s.name);
console.log(names);

const toBigger = students.filter(x => x.id > 26);
console.log(toBigger);

const toFind = students.find(s => s.id > 38);
console.log(toFind);