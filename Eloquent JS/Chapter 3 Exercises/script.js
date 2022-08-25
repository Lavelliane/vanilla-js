//MINIMUM

function min (numA, numB){
    const minumumNumber = numA > numB ? numB : numA;
    return minumumNumber;
}
console.log(min(2,3))

//RECURSION

const isEven = (n) => {
    if(n === 0){
        return 'Even';
    }else if(n === 1){
        return 'Odd';
    }else {
        return isEven(n-2);
    }
}
console.log(isEven(196))

//BEAN COUNTING

const countBs = (str) => {
    return countChar(str, 'B');
}
const countChar = (str, target) => {
    let numberOfTarget = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === target){
            numberOfTarget++;
        }
    }
    return numberOfTarget;
}

console.log(countBs('BasdBasdBbbB'));