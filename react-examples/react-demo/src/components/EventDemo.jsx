import React from 'react'

function EventDemo() {
    // function showMessage(){
    //     console.log("Button is clicked")
       
    // }
    function showMessage(btnName){
        // console.log("Button is clicked")
        console.log(`Button ${btnName} is clicked`)
    }
  return (
    <div>
      {/* <button onClick={showMessage}>Click</button> */}
      
      <button onClick={()=>showMessage('One')}>Button One</button>
      <button onClick={()=>showMessage('Two')}>Button Two</button>
      <button onClick={()=>showMessage('Three')}>Button Three</button>
    </div>
  )
}

export default EventDemo
