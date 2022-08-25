//A VECTOR TYPE

class Vec {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    plus(anotherVector) {
        let result = new Vec(this.x + anotherVector.x, this.y + anotherVector.y);
        return result
    }
    minus(anotherVector){
        let result = new Vec(this.x - anotherVector.x, this.y - anotherVector.y);
        return result
    }
    get length(){
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2))
    }
}
const vector1 = new Vec(2,4);
const vector2 = new Vec(1,3);
const result = vector1.plus(vector2) 

console.log(result.length)

//GROUPS and ITERABLE GROUP
class Group {
    constructor(){
        this.group = [];
    }
    add(valueToBeAdded){
        if((this.group).includes(valueToBeAdded)){
            console.log('Value already exists')
        }else{
            this.group.push(valueToBeAdded)
        }
    }
    has(value){
        return this.group.includes(value)
    }
    delete(valueToBeDeleted){
        this.group = this.group.filter((x) => x !== valueToBeDeleted)
    }
    static from(iterableObject){
        let result = new Group();
        for(let i of iterableObject){
            result.add(i)
        }
        return result;
    }
    [Symbol.iterator](){
        return new GroupIterator(this);
    }
}
class GroupIterator{
    constructor(x){
        this.group = x.group;
        this.counter = 0;
    }
    next(){
        if(this.counter === this.group.length){
            return {done: true};
        }
        let value = this.group[this.counter];
        this.counter++;
        return {value, done: false};
    }
}




// const groupOfNumbers = new Group();

// groupOfNumbers.delete(2)
// console.log(groupOfNumbers)
// console.log(groupOfNumbers.has(4))

//ITERABLE TEST

for(let value of Group.from([2,4,6,'a',6])){
    console.log(value)
}