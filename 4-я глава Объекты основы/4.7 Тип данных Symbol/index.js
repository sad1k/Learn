// Symbol Data Type:
// Creating Unique Keys:

// Define a symbol named id using the Symbol function.
// Create an object user with a property name and assign it a value.
// Add a property to user using the symbol id and assign it a value.
// Log the user object to see the result.
// Using Symbols for Object Properties:

// Create a symbol id as before.
// Define an object company with properties name and address.
// Use the symbol id as a property key to store the company's ID.
// Log the company object to see the result.

const id = Symbol('id')
const user = {
    name: 'Victor',
    [id]: id
}
console.log(user) //{ name: 'Victor', [Symbol(id)]: Symbol(id) }


const company = {
    name: 'Victor inc',
    address: 'New York',
    [id]: 100
}

console.log(company)