import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import './App1.css'

function Header() {
  const history= useNavigate();
  const routeChange = () => { 
    history("/")
  }
  return (
    <>
    <div className="header">
    <div></div>
    <div className> QUIZ </div>
    <Button variant="contained" style={{ backgroundColor:"#6B438A", marginLeft: "1px"  }} onClick={routeChange}>Home</Button>
    </div>
    <hr className="divider"/>
    </>
  )
}

export default Header