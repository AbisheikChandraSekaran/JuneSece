import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    function userPass(e){
        e.preventDefault();
        alert("Welcome to the Login Page");
        console.log("Welcome to the Login Page");
    }
  return (
    <section>
        <h1>Login</h1>
        <form  onSubmit={userPass} >
            <label htmlFor='userName'>Username: </label>
                <input type="text" placeholder="User Name"name="username"  />
                <br/>
                <br/>
            
                 <label htmlFor='userName'>Password: </label>
                <input type="password" placeholder="Password"name="password" />
            <br/>
            <br/>
            <button>Login</button>
            <p>Dont have an account? <Link to="/signup">SignUp</Link></p>
        </form>
    </section>
  )
}

export default Login



