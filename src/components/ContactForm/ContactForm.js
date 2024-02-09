import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { getContacts } from '../redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number
    );

    if (existingContact) {
      alert('Alarm! The same contact!')
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };


  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label className="contact-inf">
        Name:
        <input  
        id="contactName"
        name="contactName"
        className="contact-input" 
        type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="contact-inf">
        Number:
        <input 
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        className="contact-input" 
        value={number} 
        onChange={(e) => setNumber(e.target.value)} 
        required
        />
      </label>
      <button className="button-submit" type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;


