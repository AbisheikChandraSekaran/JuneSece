import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnf_password, setCnfPassword] = useState("");
  const signup = async (e) => {
    e.preventDefault();
    if (password !== cnf_password) {
      alert("Password and Cnf Password doesn't match");
      return;
    }
    const res = await axios.post("http://localhost:8000/signup", {
      fname: fname,
      lname: lname,
      uname: uname,
      email: email,
      password: password,
    });
    console.log(res);
    const message = res.data.message;
    const isSignup = res.data.isSignup;
    console.log(message, isSignup);
    if (isSignup) {
      alert(message);
      navigate("/login");
    }
  };
  return (
    <section>
      <h1>Signup</h1>
      <form onSubmit={signup}>
        <label htmlFor="fname">Enter your First Name:</label>
        <input
          type="text"
          placeholder="Enter your First Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="lname">Enter your Last Name:</label>
        <input
          type="text"
          placeholder="Enter your Last Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Enter your User Name"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Enter your Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="cnf_password">Confirm Password:</label>
        <input
          type="password"
          placeholder="Enter your Password"
          value={cnf_password}
          onChange={(e) => setCnfPassword(e.target.value)}
        />
        <br />
        <br />
        <button>Signup</button>
      </form>
      <p>
        Already have an account?? <Link to="/login">Login</Link>
      </p>
    </section>
  );
};
export default Signup;