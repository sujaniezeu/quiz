
// import { Switch } from '@mui/material'
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App1.css"
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Quiz from './Quiz'
import Result from './Result'
function App1() {
    const [Name, SetName] = useState("");
  
    return (
        <BrowserRouter>
            <div className="app1" style={{ backgroundColor: "#D9B586" }}>
                <Header />
                <Routes>
                    <Route path="/" exact element={<Home Name={Name} SetName={SetName}  />}> </Route>
                    <Route path="/Quiz/:id" element={<Quiz />}> </Route>
                    <Route path="/Result" element={<Result />}> </Route>
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default App1