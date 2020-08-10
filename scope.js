function sum(num1, num2){
    let result  = num1 + num2;

    if( result > 9){
        let mood  = "happy";
        console.log(mood);
    }
    
    return result;
}
const sumIs = sum(12, 20);
console.log(sumIs)