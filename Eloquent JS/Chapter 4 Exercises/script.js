//THE SUM OF A RANGE

const range = (start, end, step = 1) => {
    let result = [];
    for(let i = start; i <= end; i+= step){
        result.push(i);
    }
    return result;
}
console.log(range(1,10, 2))

const sum = (range) => {
    let result = 0;
    for(let i of range){
        result += i;
    }
    return result
}
console.log(sum(range(1,10, 2)))

//REVERSING AN ARRAY

const reverseArray = (arr) => {
    let result = [];
    for(let i = arr.length -1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
console.log(reverseArray([1,2,3,4,5]))

const reverseArrayInPlace = (arr) => {
    const n = arr.length;
    const middle = Math.floor(n/2);
    let temp = null;
    for(let i = 0; i < middle; i++){
        temp = arr[i];
        arr[i] = arr[n-1-i];
        arr[n-1-i] = temp;
    }
    return arr;
}
console.log(reverseArrayInPlace([1,2,3,4,]))

//A LIST
//----------------STACK VERSION-------------
const arrayToList = (arr) => {
    //CREATE OBJECTS
    //PUSH THEM TO STACK DEPENDING ON ARRAY LENGTH
    let result;
    let stack = createStack(arr);
    if(stack.length === 1){
        return stackTop(stack);
    }
    for(let i = 0; i < stack.length; i++){
        //ASSIGN STACK.POP TO TEMP VARIABLE
        const temp = stack.pop();
        //MAKE TEMP VARIABLE THE REFERENCE OF THE NEW TOP
        stack[stack.length-1].rest = temp;
        if(stack.length === 1){
            result = stackTop(stack);
        }
    }
    return result;



    function createStack(arr){
        let stack = [];
        for(let i = 0; i < arr.length; i++){
            stack.push(createObject(arr[i]));
        }
        return stack;
    }
    function createObject(val){
        return {value : val, rest : null};
    }
    function stackTop(stack){
        return stack[stack.length-1];
    }
   
}

console.log(JSON.stringify(arrayToList([1,2,3])))

//------------------RECURSION------------
const arr1 = [10, 20, 30];

function arrayToListRec(arr) {
  let list = {};

 for (let i = 0; i < arr.length; i++) {
    list.value = arr.splice(0, 1)[0];
    list.rest = (arr.length > 0) ? arrayToListRec(arr) : null;
 }

 return list;
}


console.log(arrayToListRec(arr1));

function listToArray (list){
    let arr = [];
    while(true){
        if(list.rest === null){
            arr.push(list.value)
            break;
        }
        arr.push(list.value);
        list = list.rest;      
    }
    return arr;
}
console.log(listToArray(arrayToList([1,2,3])));

