
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();

  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfPassword, setCnfPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== cnfPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/signup', {
        fname,
        email,
        password,
      });

      toast.success(response.data.message || "Sign Up Successful");
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Signup failed. Please try again.");
      }
    }
  };

  return (
    <section>
      <h1>Register:</h1>
      <form onSubmit={handleSignUp}>
        <label htmlFor='fullName'>Full Name: </label>
        <input
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          placeholder="Enter your Full Name"
          name="fullName"
          required
        />
        <br /><br />

        <label htmlFor='email'>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="eg: example123@gmail.com"
          name="email"
          required
        />
        <br /><br />

        <label htmlFor='password'>Set Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          name="password"
          required
        />
        <br /><br />

        <label htmlFor='confirmPassword'>Confirm Password: </label>
        <input
          type="password"
          value={cnfPassword}
          onChange={(e) => setCnfPassword(e.target.value)}
          placeholder="Confirm Password"
          name="confirmPassword"
          required
        />
        <br /><br />

        <button type="submit">SignUp</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </section>
  );
};

export default SignUp;
