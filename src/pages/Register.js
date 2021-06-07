import React, {useState} from 'react'  

function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const register = (e) => {
        e.preventDefault()
    fetch(`http://localhost:7000/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })
    }

    return (
        <div style={{backgroundColor: "white",border: '2px solid black',width:'300px', marginLeft:"auto", marginRight:'auto'}}>
            <h1>Register</h1>
            <form onSubmit={register}>
            <input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
            <br></br>
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <br></br>
            <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register
