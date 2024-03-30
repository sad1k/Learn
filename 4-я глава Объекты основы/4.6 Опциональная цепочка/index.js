// Optional Chain '?..':
// Accessing Nested Properties:

// Create an object user with the following structure: { profile: { name: 'John', age: 30 } }.
// Use optional chaining to safely access the user's profile name property and log it to the console.
// If profile does not exist, log "Profile does not exist" instead.
// Nested Optional Chaining:

// Extend the user object to include a contact property which may or may not exist.
// Access the contact email property using optional chaining and log it to the console.
// Handle the case where contact or email may not exist gracefully.

const user = {
    profile:{ 
        name:'John',
        age: 30
    },
    contact:{
    }
}

if(!user?.profile){
    console.log('Profile does not exist')
}else{
    console.log(user?.profile)
    console.log(user?.profile?.name)
    console.log(user?.profile?.age)
}


if(!user?.contact){
    console.log('Contact does not exist')
}else{
    console.log(user?.contact)
}

if(!user?.contact?.email){
    console.log('Email does not exist')
}else{
    console.log(user?.contact?.email)
}