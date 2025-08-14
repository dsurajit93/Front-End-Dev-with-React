function One(){
    let name = "Ram";
  let age = 20;
  let hh = <h1>Hello React</h1>
  console.log(hh);
  return (
   <>
    <h1>Hello, World!</h1>
    <h2>React JS</h2>
    <h2>Name: {name} Age: {age}</h2>
    {hh}
   </>
  )
}

export default One