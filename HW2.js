function hasProperty(propName, obj) {
    return obj.hasOwnProperty(propName);
}

const exampleObject = {
    name: 'Ivan',
    age: 23,
    city: 'Volgograd'
};

console.log(hasProperty('city!', exampleObject)); 
