import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'
import One from './components/One'
import Two from './components/Two'
import User from "./components/User"
import Users from "./components/USers"

function App() {
  return (
    <>
      {/* <One />
      <Two /> */}

      {/* <User name="ram" age="20" />
      <User name="sam" age="22" />
      <User name="tom" age="21" />
      <User name="spike" age="23" /> */}

      <Users />
    </>
  )
}

export default App
