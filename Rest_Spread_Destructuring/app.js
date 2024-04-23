//Rest: It is used to collect all the remaining elements into an array.
logger = (a, b, c, ...params) => {
    console.log(params);
}

logger(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//Spread
var arr1 = ['Java', 'Python', 'Ruby'];
var arr2 = ['JavaScript', 'TypeScript', 'CoffeeScript'];
var arr3 = [...arr2, ...arr1];
console.log(arr3);

//Destructuring
var arr = ['Java', 'Python', 'Ruby'];
var [a, , c] = arr;
console.log(a, c);

var course = {
    name: 'Java',
    duration: '2 months',
    fee: 2000,
    category: {
        name: 'Programming',
        author: 'Sachin'
    }
}

//name of variable must be same as key of object
var { name: parentName, category: {name: childrenName} } = course;
console.log(parentName);
console.log(childrenName);