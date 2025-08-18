import { useState } from 'react'

function ShowHide() {
    let [ display, setDisplay ] = useState(true)

    function toggleDisplay () {
        setDisplay(!display)
    }
  return (
    <div className='container my-3'>
     {/* {
        display  ? (
             <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum, placeat quos ab nostrum nobis. Consequatur similique quaerat, aperiam, nulla obcaecati debitis ducimus libero voluptatem minima recusandae dicta id non ratione quasi accusamus nemo quas officiis nisi ipsam porro fuga, at omnis! Omnis suscipit quia explicabo voluptatibus non consequuntur aliquam sequi distinctio esse maiores quasi maxime, nihil porro provident reprehenderit sint blanditiis illum sapiente eos dolor quaerat atque harum accusantium. Expedita ipsum incidunt illum quos non? Nam nostrum debitis odio recusandae animi est beatae! Neque fuga molestias ipsam esse dolor consectetur aliquam, ut harum voluptatem earum provident tempore nesciunt beatae!</p>
        ) : ('')
     } */}
     {
        display &&  <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum, placeat quos ab nostrum nobis. Consequatur similique quaerat, aperiam, nulla obcaecati debitis ducimus libero voluptatem minima recusandae dicta id non ratione quasi accusamus nemo quas officiis nisi ipsam porro fuga, at omnis! Omnis suscipit quia explicabo voluptatibus non consequuntur aliquam sequi distinctio esse maiores quasi maxime, nihil porro provident reprehenderit sint blanditiis illum sapiente eos dolor quaerat atque harum accusantium. Expedita ipsum incidunt illum quos non? Nam nostrum debitis odio recusandae animi est beatae! Neque fuga molestias ipsam esse dolor consectetur aliquam, ut harum voluptatem earum provident tempore nesciunt beatae!</p>
     }
      <button onClick={toggleDisplay}>
        { display ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}

export default ShowHide
