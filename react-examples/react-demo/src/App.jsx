import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'
import One from './components/One'
import Two from './components/Two'
import User from "./components/User"
import Users from "./components/USers"
import EventDemo from "./components/EventDemo"
import Counter from "./components/Counter"
import ShowHide from "./components/ShowHide"
import CurrencyConverter from "./components/CurrencyConverter"
import Calculator from "./components/Calculator"
import Meals from "./components/Meals"

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <>
      {/* <One />
      <Two /> */}

      {/* <User name="ram" age="20" />
      <User name="sam" age="22" />
      <User name="tom" age="21" />
      <User name="spike" age="23" /> */}

      {/* <Users /> */}

      {/* <EventDemo /> */}

      {/* <Counter /> */}
      {/* <Counter /> */}
      {/* <ShowHide /> */}

      {/* <CurrencyConverter /> */}

      {/* <Calculator /> */}

      {/* <Meals /> */}

      <BrowserRouter>
      <nav className="bg-primary text-white text-center py-3">
        <Link to="/" className="mx-3 text-white">Calculator</Link>
        <Link to="/cc" className="mx-3 text-white">Currency Converter</Link>
        <Link to="/meals" className="mx-3 text-white">Meals</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/cc" element={<CurrencyConverter />} />
        <Route path="/meals" element={<Meals />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
