import "./App.css"
import React from "react"
import Button from "./components/Button"
import Header from "./components/Header"
import Hello from "./components/Hello"


function App() {
  return (
    <div className="App">
      <Hello/>
      <Header />
      <div className="content">
        <h2>This is the React Remote App Created with CRA</h2>
        
        <Button />
      </div>
    </div>
  )
}

export default App
