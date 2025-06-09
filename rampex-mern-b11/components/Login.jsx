import React from 'react'

const Login = () => {
    function userPass(){
        alert("Welcome to the Login Page");
        console.log("Welcome to the Login Page");
    }
  return (
    <section>
        <h1>Login</h1>
        <form action="/sample.html" onSubmit={userPass} method="post" target="_blank">
            <label htmlFor='userName'>Username: </label>
                <input type="text" placeholder="User Name"name="username"  />
                <br/>
                <br/>
            
                 <label htmlFor='userName'>Password: </label>
                <input type="password" placeholder="Password"name="password" />
            <br/>
            <br/>
            <button>Login</button>
        </form>
    </section>
  )
}

export default Login



