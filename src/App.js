import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [credentials, setCredentials] = useState({email:"", password:""})
  const [isLogedIn, setLoggedIn] = useState(false)
  const [btnState, setBtnState] = useState(false)
  const [txtState, setTxtState] = useState(false)



  const handleChange = (e)=>{
        const {name, value}  = e.target
        setCredentials((state)=>{return {
          ...state, 
          [name]:value
        }})
  }

  const onSubmit = ()=>{
    setBtnState(true)
    setTxtState(true)
    if(credentials.email || credentials.password)
    {
      if(credentials.email == "admin" && credentials.password == "admin")
      {
        setTimeout(()=>{
          setLoggedIn(true)
        },5000)
      }
      else{
        alert("Email or Password incorrect")
        setBtnState(false)
        setTxtState(false)
      }
    }
    else
    {
      alert("please provide complete data")
      setBtnState(false)
      setTxtState(false)
    }

   
    
  }

  return (

    <div>
      {isLogedIn ? <h1>Welcome</h1>
        :
        <>
        <input type="text" value={credentials.email} name="email" disabled={txtState} onChange={handleChange}/>
        <input type="password" value={credentials.password} name="password" disabled={txtState} onChange={handleChange}/>
        {
          btnState ? <input type="button" value={"loading..."} disabled={btnState} onClick={onSubmit}/>  :
          <input type="button" value={"Login"} disabled={btnState} onClick={onSubmit}/>  
        }
        
      </>
    } 
    </div>
  );
}

export default App;
