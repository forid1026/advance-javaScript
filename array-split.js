const nums = [1,2,3,4,5,6,7,8,9];
const slice = nums.slice(2, 7);
console.log('slice values : ', slice);
console.log('Original numbers : ', nums);

//splice

const values = [ 12, 3, 45, 56, 54, 34,66, 77];
const removed = values.splice(2, 5, 99);
console.log('removed value : ', removed);
console.log('Original value : ',values);


//join methods
const together = values.join("");
console.log('together all element : ', together);