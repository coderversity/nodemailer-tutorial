import React from 'react'

const HomePage = () => {
  return (
    <section className='contact-form-section'>
      <h1>Contact Us</h1>
      <form onSubmit={null}>
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