var name = 'JavaScript';
var price = 1000;

var course = {
    name,
    price,
    getName(){
        return this.name;
    }
};

//similar to
// var course = {
//     name: name,
//     price: price,
//     getName: function(){
//         return this.name;
//     }
// };

console.log(course);


var fieldName = 'name';
var fieldPrice = 'price';

var course = {
    [fieldName]: 'JavaScript',
    [fieldPrice]: 1000
};
