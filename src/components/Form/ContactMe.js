import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';

function ContactMe({ currentView, setCurrentView }) {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    const inputType = event.target.name;
    const inputValue = event.target.value;
    console.log(inputValue)

    if (inputType === 'email') {
      setEmail(inputValue);
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      alert('Please enter a valid email');
      return;
    }
  }

  return (
    <>
      <h1>{currentView}</h1>
      <form>
        <p>Name:</p>
        <input
          type="text"
          required
        />
        <p>Email:</p>
        <input
          name="email"
          type="email"
          onChange={handleInputChange}
          required
        />
        <p>Message:</p>
        <input
          type="text"
          required
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
    </>
  )
}

export default ContactMe;