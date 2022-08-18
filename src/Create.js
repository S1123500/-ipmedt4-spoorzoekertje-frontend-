import React from 'react';
import axios from 'axios';

const LoginForm = () => {
  
  const [formValue, setformValue] = React.useState({
    email: '',
    password: ''
  });

  const handleSubmit = async() => {
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("username", formValue.email)
    loginFormData.append("password", formValue.password)
  
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/locaties",
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Login Form</p>
      <input
        type="string"
        name="name"
        placeholder="enter an email"
        value={formValue.name}
        onChange={handleChange}
      />
      <input
        type="string"
        name="beschrijving"
        placeholder="enter a password"
        value={formValue.beschrijving}
        onChange={handleChange}
      />
      <button
        type="submit"
      >
        Login
      </button>
    </form>
  )
};

export default LoginForm;