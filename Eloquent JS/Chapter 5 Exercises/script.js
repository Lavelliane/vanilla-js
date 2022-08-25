//FLATTENING
const flatten = (arr) => {
   return arr.reduce((current, element) => {return current.concat(element)})
}
let arr1 = [[1,2,3],[4,5,6],[7,8,9]]

console.log(flatten(arr1))

//YOUR OWN LOOP

const loop = (value, test, update, body) => {
   let iterator = value;
   while(test(iterator)){
      body(iterator)
      iterator = update(iterator)
   }
}
loop(0, (i) => {return i < 10}, (i) => {return i = i + 1}, (i)=>{console.log(i)})

//EVERYTHING
const everyLoopVersion = (arr, predicate) => {
   let passedElements = 0;
   for(let element of arr){
      if(predicate(element)) passedElements++;
   }
   return passedElements === arr.length
}
console.log(everyLoopVersion([2,4,6,8], (e) => {return e % 2 === 0}))

const everySomeVersion = (array, test) => {
   return !array.some(element => !test(element));
}
console.log(everySomeVersion([2,4,6,9], (e) => {return e % 2 === 0} ))