import React, { useState } from 'react';

function ContactMe({ currentView, setCurrentView }) {
 return (
 <div>
  <h1>{currentView}</h1>
  <form>
  <p>Name:</p>
  <input
  type="text"/>
  <p>Email:</p>
  <input
  type="email"/>
  <p>Message:</p>
  <input
  type="text"/>
  <button>Submit</button>
  </form>
</div>
 )
}

export default ContactMe;