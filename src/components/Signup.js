import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {

  const [credentials, setcredentials] = useState({ name: '', username: '', email: '', password: '', cpassword: '' })
  const { name, username, email, password } = credentials;
  const navigate= useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response =await fetch('http://localhost:5000/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, username, email, password })
    })
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem('token', json.authToken)
      navigate('/home')
      props.showAlert('Account created successfully','success')
    }
    else {
      props.showAlert('Inavlid credentials','danger')
    }
  }

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name='name' value={credentials.name} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" name='username' value={credentials.username} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' value={credentials.email} aria-describedby="emailHelp" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="cpassword" className="form-control" id="cpassword" name="cpassword" value={credentials.cpassword} onChange={onChange} minLength={5} required />
        </div>

        <button type="submit" className="btn btn-primary"  >Submit</button>
      </form>
    </div>
  )
}

export default Signup