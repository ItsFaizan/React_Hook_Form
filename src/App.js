import {useForm} from 'react-hook-form';
import { useState } from 'react';
import './App.css';  
function App() {
  const {register, handleSubmit, errors}  = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit =(data) =>{
      setUserInfo(data);
      console.log(data);   
  } 
  return (
    <div >
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Registration Form</h1>
      <div>
      <label>Username:</label>

      <input type="text" placeholder="Enter Username" name="username" {...register('username')}></input>
      </div>
      <br/>
      <div>
      <label>Email:</label>
        
      <input type="email" placeholder="Enter Username" name="email" {...register('email')}></input>
      </div>
      <br/>
      <div>
      <label>Password:</label>
      <input type="password" placeholder="Enter Username" name="password" {...register('password')}></input>
      </div>
      <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
