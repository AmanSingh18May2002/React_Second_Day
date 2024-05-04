import React from 'react'
import Child from './Components/Props/Props1/Child'
import Card from './Components/Props/Props2/Card'
import "./App.css";

const App = () => {

  return (
    <div>
      <Child userName="Pushkar" city="Noida"></Child>
      <Card></Card>
    </div>
  )
}
export default App