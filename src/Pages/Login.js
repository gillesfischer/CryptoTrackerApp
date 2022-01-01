import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SelectButton from '../components/SelectButton';

const spanStyle = {
  backgroundColor: 'gold',
  color: 'black',
  width: '100px',
  fontWeight: 'bold',
};

const divStyle = {
  width: '350px',
};
const containerStyle = {
  display: 'flex',
  height: '100vh',
  flexDirection: 'column',
  //  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '3rem',
};
const submitStyle = {
  backgroundColor: 'gold',
  color: 'black',
  width: '100px',
  fontWeight: 'bold',
  border: 'none',
  padding: '2px 5px',
  borderRadius: '10px',
};

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState({
    username: 'Gilles',
    useremail: 'Gilles@test.com',
    loggedIn: false,
  });

  const { username, useremail, loggedIn } = data;

  const onSubmit = (formData) => {
    console.log(JSON.stringify(formData));
    // setData({ ...data, loggedIn: true })
  };

  console.log(errors);

  return loggedIn ? (
    <h1 style={{ textAlign: 'center', marginTop: '3rem', color: 'gold' }}>
      Welcome {username}
    </h1>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={containerStyle}>
        {errors.username && (
          <p style={{ color: 'red' }}>{errors.username.message}</p>
        )}
        {errors.useremail && (
          <p style={{ color: 'red' }}>{errors.useremail.message}</p>
        )}
        <div
          id='name'
          style={divStyle}
          className='input-group input-group-sm mb-3'
        >
          <span
            style={spanStyle}
            className='input-group-text'
            id='inputGroup-sizing-sm'
          >
            Name
          </span>
          <input
            type='text'
            {...register('username', {
              required: 'username is required!',
              maxLength: { value: 4, message: 'you exceeded the length' },
            })}
            className='form-control'
            value={username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </div>
        <div
          id='email'
          style={divStyle}
          className='input-group input-group-sm mb-3'
        >
          <span
            style={spanStyle}
            className='input-group-text'
            id='inputGroup-sizing-sm'
          >
            Email
          </span>
          <input
            type='text'
            {...register('useremail', {
              required: 'email is required!',
              maxLength: { value: 4, message: 'you exceeded the length' },
            })}
            className='form-control'
            value={useremail}
            onChange={(e) => setData({ ...data, useremail: e.target.value })}
          />
        </div>

        <div>
          <button type='submit' style={submitStyle}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Login;
