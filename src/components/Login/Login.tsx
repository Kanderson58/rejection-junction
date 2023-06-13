import { Link } from 'react-router-dom';
import './Login.css'
import { Button, Paper } from '@mui/material';

const Login = () => {
  return (
    <Paper elevation={5} className='login'>
      <Link to='/register'>
        <Button 
          variant='outlined' 
          size='large' 
          style={{maxWidth:'fit-content'}}
        > Register </Button>
      </Link>
      <Link to='/user-login'>
        <Button 
          variant='outlined' 
          size='large' 
          style={{maxWidth:'fit-content'}}
        > Log In </Button>
      </Link>
    </Paper>
  )
}

export default Login