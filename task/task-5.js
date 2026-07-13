//Loop through an object and print the key-value pairs with their types
let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

const key = Object.keys(myObject);
for(const keys of key){
    console.log("Key: "+keys," | "+ "type: "+typeof myObject[keys]);
    
}