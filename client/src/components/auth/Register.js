import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// importing the setAlert action
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
// import axios from 'axios';

const Register = ({ setAlert }) => {
  // This is a state hook, putting default values 'name' etc..
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  // Destructure
  const { name, email, password, password2 } = formData;

  // Will need 'onChange' handlers in input tags to accept incoming data
  // want setform() to only change the appropriate field, use spread operator to copy formData ...
  // then use [e.target.name] to grab the name attr of the field, use now for every field
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    // use prevent default on submit actions
    e.preventDefault();
    // check if passwords match
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      console.log('SUCCESS');
      // const newUser = {
      //   name,
      //   email,
      //   password
      // };

      // try {
      //   // since we are sending data, create config obj with a header obj
      //   const config = {
      //     headers: {
      //       'Content-Type': 'application/json'
      //     }
      //   };
      //   // Create the JSON body using the newUser credentials
      //   const body = JSON.stringify(newUser);
      //   // Create the response using axios post request
      //   // Can use '/api/users' because of the proxy we created
      //   const res = await axios.post('/api/users', body, config);
      //   // Should return a token
      //   console.log(res.data);
      // } catch (err) {
      //   console.error(err.response.data);
      // }
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Create Your Account
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
            minLength='6'
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired
};

// When using connect, has to be exported along with the component
// Connect will take in two things: 1: any state you want to pass, and on object with any actions to be used
// Allows use to access props.setAlert

export default connect(
  null,
  { setAlert }
)(Register);
