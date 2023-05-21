import React, {useState} from 'react'
import { Box,Button } from '@mui/material'
import '../styles/pages/LoginPage.scss'

const LoginPage = ({onLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
    setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy authentication logic
    if (email === 'dummy@example.com' && password === 'password') {
      // Authentication successful
      onLogin();
      
    //  local storage  
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    } else {
      // Authentication failed
      console.log('Login failed');
    }
  };
  return (
    <>
    <Box className="form-wrapper">
        <Box className="form-head">
            <h2>Login</h2>
        </Box>
      <form onSubmit={handleSubmit}>
        <Box className="form-email">
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
        </Box>
        <Box className="form-password">
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
        </Box>
        <Box className="form-button">
            <Button type="submit">Login</Button>
        </Box>
      </form>
    </Box>
    </>
  )
}

export default LoginPage