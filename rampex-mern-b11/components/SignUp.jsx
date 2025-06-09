import React from 'react'

const SignUp = () => {
    function userPass(){
        alert("Welcome to the Login Page");
        console.log("Welcome to the Login Page");
    }
  return (
    <section>
        <h1>Register:</h1>
        <form action="/sample.html" onSubmit={userPass} method="post" target="_blank">
            <label htmlFor='fullName'>Full Name: </label>
                <input type="text" placeholder="Enter your Full Name"name="fullName"  />
                <br/>
                <br/>
            <label htmlFor='email'>Email:  </label>
                <input type="text" placeholder="eg:example123@gmail.com"name="email"  />
                <br/>
                <br/>
                 <label htmlFor='set password'>Set Password: </label>
                <input type="password" placeholder=" Enter the Password"name="password" />
            <br/>
            <br/>
             <label htmlFor='confirm password'>Confirm Password: </label>
                <input type="password" placeholder=" Confirm Password"name="password" />
            <br/>
            <br/>
            <button>SignUp</button>
        </form>
    </section>
  )
}

export default SignUp