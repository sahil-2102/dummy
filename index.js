


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
// swapping values
let p = 1;
let q = 3;

[p, q] = [q, p];
console.log(a); // 3
console.log(b); // 1

const arr2 = [1, 2, 3];
[arr2[2], arr2[1]] = [arr2[1], arr2[2]];
console.log(arr2); // [1, 3, 2]

console.log(clone === marks);
// Questions to solve
const obj = {firstName: "Sahil", lastName: "Kumar"};
const {firstName, lastName} = obj;
console.log(firstName + " " + lastName);

const colors = ['red', 'blue', 'green'];
const [red, blue] = colors;
console.log(red, blue);
// Combine two arrays using spread operators
const first = [1,2,3,4,5];
const second = [6,7,8,9,10];
const third = [...first, ...second]; //When used in array literals or function calls, it spreads elements out instead of
                                    // creating a new array inside the array
console.log(third);
// cloning object using spread
const book = { title: '1984', author: 'Orwell' };
const objClone = {...book};
console.log(objClone);
console.log(book === objClone);
// destructuring from a nested object
const user = {
  name: 'Alice',
  location: {
    city: 'Paris',
    country: 'France'
  }
};
const {city, country} = user.location;
console.log(`City: ${city}\nCountry: ${country}`);
// overriding a property after destructuring
const user2 = { name: 'Tom', age: 30 };
const user3 = {...user2, age: 40};
console.log(user3);


//Merging two objects
const contact = { email: 'a@example.com' };
const profile = { name: 'Alex' };
const merged = {...contact, ...profile};
console.log(merged);


const values = [1,2,3];
function sum1([v1,v2,v3]){
    return v1 + v2 + v3
}
console.log(sum1([...values]));
// another way to use this function 
const value2 = [1,2,3];
function sum2(v1,v2,v3){
    return v1 + v2 + v3
}
console.log(sum2(...value2)); // this would just spread the values without creating a new array
