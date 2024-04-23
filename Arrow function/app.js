const sum = (a, b) => {
    return a + b;
}
//or
// const sum = (a, b) => a + b;

//error
// const obj = (a, b) => {a:a, b:b};
const obj = (a, b) => ({a:a, b:b});

console.log(sum(2, 3));


const course = {
    name:"JS",
    getName: function(){
        return this.name;
    }
};

console.log(course.getName());