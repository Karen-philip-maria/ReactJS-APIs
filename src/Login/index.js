import './index.css';
import {useState}from 'react';
import {login} from"./utils";

const Login =() => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    console.log({username});
   
    const handleLogin = async(event)=>{
        event.preventDefault();
        const result = await login ({username, password});
        console.log({ result });
    }

    return(
        <div className='loginbutton'>
    <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <button type="submit">Login</button>
        <br/>
        <input placeholder="Enter username" type="text" 
        onChange={(Event)=>setUserName(Event.target.value)}/>
        <br/>
        <input placeholder="Enter password" type="password" 
        onChange={(Event) => setPassword(Event.target.value)}/>
    </form>
        </div>
    )
}
export default Login;