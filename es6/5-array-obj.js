let stds = [
    {roll: 1, name: "Ram", score: 85},
    {roll: 2, name: "Shayam", score: 35},
    {roll: 3, name: "Arjun", score: 75},
    {roll: 4, name: "Bimal", score: 20},
    {roll: 5, name: "Amrita", score: 95},
]

// display all the student details
// stds.forEach((s) => {
//     console.log(`Roll ${s.roll} is ${s.name} and has score ${s.score}`)
// })

// add 5 more mark with all the student's score
let newStds = stds.map((s)=>{
    s.score = s.score+5;
    return s
})
// console.log(newStds)
// find out the students who have failed (score <40)
// let failedStds = stds.filter( (s) => s.score < 40)
let failedStds = newStds.filter( (s) => s.score < 40)
console.log(failedStds)