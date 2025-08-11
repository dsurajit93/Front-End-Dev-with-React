let add = (a, b, fun) =>{
    let c = a+b;
    // return c;
    fun(c)
}

// let display = (data) => {
//     console.log(data)
// }

// let s = add(10, 20, display)
// display(s)

// add(100, 200, (data) => {
//     console.log(data)
// })

let fun1 = (n, callback1) => {
    if(n%3 ==0){
        console.log(`${n} is divisible by 3`);
    } else {
        console.log(`${n} is not divisible by 3`);
    }
    callback1(n)
}

fun1(20, (num)=>{
 if(num % 5 ==0){
        console.log(`${num} is divisible by 5`);
    } else {
        console.log(`${num} is not divisible by 5`);
    }
})