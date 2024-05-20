import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:matthewkenn00@gmail.com?subject=Contact from ${email}&body=${message}`
    window.location.href = mailtoLink
  }

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <form onSubmit={handleSubmit} className='contact__form'>
        <label htmlFor='email'>
          Your Email:
          <input
            id='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor='message'>
          Your Message:
          <textarea
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            minLength={10}
            maxLength={500}
            required
          />
        </label>
        <button type='submit' className='btn btn--outline'>
          Send Email
        </button>
      </form>
    </section>
  )
}

export default Contact
