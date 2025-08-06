// console.log('hello world')

// let uname = "Amit"
// let age = 20
// // let msg = uname+" is "+age+" years old"
// let msg = `${uname} is ${age} years old`
// console.log(msg);

// let a =10
// let b =20
// let msg1 = `The value of a is ${a} and the value of b is ${b}`
// console.log(msg1)

let std = {
    name: "Amit",
    age: 20,
    roll: 1,
    cgpa: 9.3,
    mobile: [987456311, 784586325],
    address: {
        city: {
            "addressline": "Sailashree Vihar",
            "district": "Khurda"
        },
        state: "Odisha",
        pin: 750125 
    }
}

console.log(std.cgpa)
console.log(std.name)
console.log(std.mobile[0])
console.log(std.address.state)
console.log(std.address.city.district)
console.log(`${std.name} is ${std.age} years old and living in ${std.address.state}`)