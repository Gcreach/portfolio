import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formState, setFormState] = useState({name: "", email: "", message: ""});
    const handleChange = (e) => {
        e.preventDefault();
        setFormState({...formState, [e.target.name]: e.target.value});
    };
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
       console.log(formState);
       emailjs.sendForm('service_35tzt03', 'template_z0vgj2', form.current, 'SqyTPjYVmS9eZuwpM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
   
    return <form onSubmit={handleSubmit}>
        <div className="mb-3">
  <label htmlFor="name" className="form-label">Name</label>
  <input type="text" name='name' className="form-control" placeholder="John Doe" defaultValue={formState.name} onChange={handleChange}/>
</div>
        <div className="mb-3">
  <label htmlFor="email" className="form-label">Email address</label>
  <input type="email" name='email' className="form-control" placeholder="someone@example.com" defaultValue={formState.email} onChange={handleChange}/>
</div>
<div className="mb-3">
  <label htmlFor="message" className="form-label">Message</label>
  <textarea name="message" className="form-control" rows="3" defaultValue={formState.message} onChange={handleChange}></textarea>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
    </form>;

  };
export default Contact;