import { TextField, MenuItem, Button } from '@mui/material'
import React, { useState } from 'react'
import './Home.css'
import ErrorMessage from './ErrorMessage'
import {useNavigate} from "react-router-dom"

function Home({ Name, SetName }) {

  const [Gender, SetGender] = useState("")
  const [Error, setError] = useState(false)
  const history= useNavigate();
  

  const handleSubmit = () => {
    if (!Gender) {
      setError(true);
     
      return;
    }
    else {
      setError(false);
      history("/Quiz/"+1)
    }
  }

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}> Enter your Details</span>
        <div className="settings_select">
          {Error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
          <TextField style={{ marginBottom: 25 }} label="Name" variant="outlined" onChange={(e) => { SetName(e.target.value) }} />
          <TextField
            select label="Select Gender"
            variant="outlined"
            style={{ marginBottom: 30 }}
            value={Gender}
            onChange={(e) => { SetGender(e.target.value) }}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"FeMale"}>FeMale</MenuItem>
            <MenuItem value={"Others"}>Others</MenuItem>
          </TextField>
          <Button variant="contained" color="primary" onClick={handleSubmit}>Start QUIZ</Button>
        </div>
      </div>
    </div>
  )
}

export default Home