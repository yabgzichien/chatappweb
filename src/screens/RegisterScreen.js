import React, { useState } from 'react'
import '../css/RegisterScreen.css'

import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <div className='loginScreen'>
        <div className='container'>
            <h1 style={{textAlign: 'center'}}>Register</h1>
   
            <form className='form'>
                <div className='inputContainer'>
                <TextField onChange={e=>setUsername(e.target.value)} value={username} id="filled-basic" label="Username" variant="filled" required style={{backgroundColor: 'white'}}/>
                </div>
                <div className='inputContainer'>
                <TextField onChange={e=>setEmail(e.target.value)} value={email} id="filled-basic" label="Email" variant="filled" required style={{backgroundColor: 'white'}}/>
                </div>
                <div className='inputContainer'>
                <TextField onChange={e=>setPassword(e.target.value)} value={password} type="password" id="filled-basic" label="Password" variant="filled" required style={{backgroundColor: 'white'}}/>
                </div>
                <div className='inputContainer'>
                <TextField onChange={e=>setConfirmPassword(e.target.value)} value={confirmPassword} type="password" id="filled-basic" label="Confirm Password" variant="filled" required style={{backgroundColor: 'white'}}/>
                </div>
                <Button variant="contained" style={{marginLeft: '100px', marginTop: '20px', }}>Create Account</Button>
            </form>
            
        </div>
        <p className='dhacr'>Already have an account? <Link to='/login'>Login</Link></p>
    </div>
  )
}

export default RegisterScreen