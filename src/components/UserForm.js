import React, { useState } from 'react';
import Validateform from '../Validateform';
function UserForm() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [phone, setPhone] = useState('');
  const [userData, setUserData] = useState([]);

  function formSubmitted(e) {
    e.preventDefault();
    setUserData([...userData, [fname, lname, email, pass, phone]]);
    setFname('');
    setLname('');
    setEmail('');
    setPass('');
    setPhone('');
  }

  return (
    <>
      <form onSubmit={formSubmitted} id='userform'>
        <div className='info'>
          <input
            type='text'
            placeholder='Enter your first name'
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className='info'>
          <input
            type='text'
            placeholder='Enter last name'
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className='info'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='info'>
          <input
            type='password'
            placeholder='Password'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className='info'>
          <input
            type='number'
            placeholder='Phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className='info'>
          <input type='radio' id='male' name='gender' value='male' />
          <label htmlFor='male'>Male</label>
          <input type='radio' id='female' name='gender' value='female' />
          <label htmlFor='female'>Female</label>
        </div>
        <div className='info'>
          <input type='checkbox' id='agree' />
          <label htmlFor='agree'>I agree</label>
        </div>
        <div className='info'>
          <button type='submit'>Submit</button>
        </div>
      </form>
      <Validateform userData={userData} />
    </>
  );
}

export default UserForm;
