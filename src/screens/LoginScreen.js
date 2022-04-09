import React, { useState } from 'react'
import '../css/LoginScreen.css'

import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='loginScreen'>
        <div className='container'>
            <h1 style={{textAlign: 'center'}}>Login</h1>
            <div className="imgContainer">
                <img className='img' src='http://pm1.narvii.com/7561/75608ab20de9f48d17776ae9875a06b7a8df5ceer1-1242-585v2_uhq.jpg' />
            </div>
            <form className='form'>
                <div className='inputContainer'>
                <TextField onChange={e=>setEmail(e.target.value)} value={email} id="filled-basic" label="Email" variant="filled" required style={{backgroundColor: 'white'}}/>
                </div>
                <div className='inputContainer'>
                <TextField onChange={e=>setPassword(e.target.value)} value={password} type="password" id="filled-basic" label="Password" variant="filled" required style={{backgroundColor: 'white'}}/>
                </div>
                <Button variant="contained" style={{marginLeft: '100px', marginTop: '20px', }}>Login</Button>
            </form>
            
        </div>
        <p className='dhacr'>Don't have an account? <Link to='/register'>Register</Link></p>
    </div>
  )
}

export default LoginScreen