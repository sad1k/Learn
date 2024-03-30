// Converting Objects into Primitives:
// Custom Object to Primitive Conversion:

// Create an object person with properties name and age.
// Implement a custom conversion method for the object person that returns a string in the format "name: [name], age: [age]" when converted to a string using toString().
// Log the person object after conversion to see the result.
// ValueOf Method:

// Extend the person object to include a numeric property salary.
// Implement a custom conversion method for the object person that returns the total earnings (salary * 12) when converted to a number using valueOf().
// Log the person object after conversion to see the result.


const person = {
    name: 'Victor',
    age: 20,
    salary:2100,
    [Symbol.toPrimitive](hint){

        switch(hint){
            case 'string':
                return `name: ${this.name}, age: ${this.age}`
            case 'number':
                return this.salary*12
            case 'default':
                return `name: ${this.name}, age: ${this.age}`
        }
    }
}

console.log(person + '')
console.log(Number(person))
