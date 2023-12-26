'use client';

import React, { useState } from 'react'

const HomePage = () => {
  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
  });

  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
      setSubmitting(true);

      // send email
      const response = await fetch('api/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const { success, error } = await response.json();

      if (success) {
        alert('Your inquiry has been submitted!');
      } else if (error) {
        console.error(error);
        alert('Error while submitting your inquiry: ', error);
      }

      setSubmitting(false);
  }

  return (
    <section className='contact-form-section'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id='firstName' name='firstName' placeholder='Enter first name...' />
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id='lastName' name='lastName' placeholder='Enter last name...' />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' name='email' placeholder='Enter email...' />
        </div>
        <div className="form-control">
          <label htmlFor="message">Message</label>
          <textarea id='message' name="message" cols="10" rows="10" placeholder='Enter message...'></textarea>
        </div>
        <button className='btn' type='submit'>Send Message</button>
      </form>
    </section>
  )
}

export default HomePage