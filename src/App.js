import React from 'react';
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Project from './Project 1'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Project heading = "Enter your Text"/> }></Route>
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
