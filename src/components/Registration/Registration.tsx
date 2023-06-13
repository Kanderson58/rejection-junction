import { TextField, Button } from "@mui/material";
import './Registration.css';
import { useState } from "react";
import { ChangeEvent } from "react";
import { useHistory } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userAtom, usersAtom } from "../../recoil/atoms";

// type Props = {
//   users: string[];
//   setUsers: (users: string[]) => void;
//   setUser: (user: string) => void;
// }

const Registration = () => {
  const [username, setUsername] = useState('');
  const users = useRecoilValue(usersAtom);
  const setUsers = useSetRecoilState(usersAtom);
  const setUser = useSetRecoilState(userAtom);
  const history = useHistory();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  const handleRegister = () => {
    setUsers([...users, username]);
    setUser(username);
    history.push('/home');
  }

  return (
    <div>
      <form>
        <TextField 
          label='Username' 
          style={{width:'500px', margin:'35% 0 3%'}}
          onChange={handleChange}
        />
        <Button 
          variant="contained" 
          size='large' 
          style={{width:'fit-content'}}
          onClick={handleRegister}
        >Register</Button>
      </form>
    </div>
  )
}

export default Registration;