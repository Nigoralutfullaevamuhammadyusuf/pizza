import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'
const Contact = () => {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage:`url(${PizzaLeft})`}}></div>
        <div className='rightSide'>
            <h1>Contact us</h1>
<form id='contact-form'>
    <label htmlFor='name'>Full Name</label>
    <input type='text' name='name' placeholder='Enter full name'></input>
    <label htmlFor='email'>Email</label>
    <input type='text' name='name' placeholder='Enter email address'></input>
    <label htmlFor='message'>Messages</label>
    <textarea name='name' rows='6' placeholder='enter message' required>
    
    </textarea>
<button>Send messages</button>
</form>
        </div>

    </div>
  )
}

export default Contact