import { useState } from 'react'

function Counter() {
    // let count = 0;

    // let v = useState(100)
    // console.log(v)

    // let [ count, setCount ] = useState(0)
    let [ count, setCount ] = useState(1)

    function increment(){
        // count++;
        // console.log(count)
        setCount(count+1)
    }
    function decrement (){
        if(count > 1) {
            setCount(count-1)
        }
    }
  return (
    <div className='text-center my-4'>
      <h1>{count}</h1>
      <button onClick={decrement} className='btn btn-danger'>-</button>
      <button onClick={increment} className='btn btn-primary ms-2'>+</button>
    </div>
  )
}

export default Counter
