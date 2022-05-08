import { useState } from "react";
import { nanoid } from 'nanoid';
import { useCreateContactMutation } from "../../redux/contactSlice";
import s from './ContactForm.module.css';

export default function ContactForm() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const [createContact] = useCreateContactMutation();

  const handleChangeName = (e) => {
   setName(e.currentTarget.value);
   };

  const handleChangeNumber = e => {
     setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    createContact({ name, phone: number });
    setName("");
    setNumber("");
  };
  
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}> Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeName}
          id={nameInputId}
        />
      </label>
      <label htmlFor={numberInputId}>Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChangeNumber}
          id={numberInputId}
        />
      </label>
      <button className={s.button} type="submit">Add contact</button>
    </form>
  );
}
