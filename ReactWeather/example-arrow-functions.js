var names = ['Zack', 'Carl', 'Scott'];

/*names.forEach(function(name)  {
    console.log('forEach', name);
});

names.forEach((name) => {
    console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';

console.log(returnMe('Zack'));*/

// anon function have their own 'this' binding
// arrow functions take on their parents 'this' binding

/*var person = {
    name: 'Zack',
    greet: function () {
        names.forEach((name) => {
            console.log(this.name + ' says hi to ' + name);
        });
    }
};

person.greet();*/

function add (a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b;
}

var addExpression = (a, b) =>  a + b;

console.log(addStatement(1, 3));
console.log(addExpression(9, 0));