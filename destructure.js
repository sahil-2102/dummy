


let arr = [1,2,3,4,5];
const [a,b,c] = arr; // this assigns each variable the corresponding values from the array
const [x,,y,,z] = arr; // if we want to ignore some values then we can just have an empty space so that no
                        // variable can be assigned a corresponding value
console.log(a,b);
console.log(x,y,z);
const [...all] = arr; // the spread operator would grab all the rest of the values that haven't been destructured
console.log(all);
// cloning
let marks = [1,2,3,4,5];
const clone = [...marks]; // this would create a new array by copying the old array
console.log(clone === marks);
// Questions to solve
const obj = {firstName: "Sahil", lastName: "Kumar"};
const {firstName, lastName} = obj;
console.log(firstName + " " + lastName);


