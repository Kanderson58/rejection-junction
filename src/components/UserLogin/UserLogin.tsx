import { Paper, TextField, Button, Alert } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useHistory } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userAtom, usersAtom } from "../../recoil/atoms";

// type Props = {
//   setUser: (user: string) => void;
//   users: string[];
// }

const UserLogin = () => {
  const [currentInput, setCurrentInput] = useState('');
  const [error, setError] = useState(false);
  const users = useRecoilValue(usersAtom);
  const setUser = useSetRecoilState(userAtom);
  
  const history = useHistory();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(event.target.value);
  }

  const handleLogin = () => {
    if(users.includes(currentInput.toLowerCase())) {
      setError(false);
      setUser(currentInput);
      history.push('/home');
    } else {
      setError(true);
    }
  }

  return (
    <Paper elevation={5} className='login'>
      <TextField
        label='Username'
        variant='filled'
        onChange={handleChange}
      />
      {error && <Alert severity="error">Username is incorrect</Alert>}
      <Button
        variant="outlined"
        onClick={handleLogin}
      >
        Log In
      </Button>
    </Paper>
  )
}

export default UserLogin