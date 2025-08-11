let a = [2, 5, 8, 4, 9, 10, 3, 6]

// for(let i=0; i<a.length; i++){
//     console.log(a[i])
// }

// a.forEach(function(v, i){
//     console.log(`${i} -> ${v}`)
// })

// a.forEach((v, i) => {
//     console.log(`${i} -> ${v}`)
// })

// a.forEach((v)=>{
//     if(v%2 == 0){
//         console.log(`${v} -> even`)
//     } else {
//         console.log(`${v} -> odd`)
//     }
// })

// a.forEach((n)=>{
//     console.log(n*10)
// })
// console.log(a)

// let b = a.map((v, i)=>{
//     return v+5
// })
// let b = a.map( v => v+5 )
// let b = a.map( v => {
//     let f = 1;
//     for(let i=1; i<=v; i++){
//         f=f*i;
//     }
//     return f;
// })

// let b = a.filter((v, i)=>{
//     if(v%2 == 0){
//         return true;
//     } else {
//         return false;
//     }
// })

// let b = a.filter((v)=> {
//     if(v%5 == 0){
//         return true
//     } else {
//         return false
//     }
// })

let b = a.filter (v => v%5 == 0 )

console.log(a);
console.log(b);
