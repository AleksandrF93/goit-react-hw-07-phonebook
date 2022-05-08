import s from './ConatctListItem.module.css';

const ContactItem = ({ contacts, onDelete, deleting }) => {
  return (
    <>
      {contacts.map(contact => (
        <li key={contact.id}>
          {`${contact.name} ${contact.phone}`}
          <button className={s.button}  onClick={() => onDelete(contact.id)}>
            {deleting ? 'Deleting...' : 'Delete'}
          </button>
        </li>
      ))}
    </>
  );
};

export default ContactItem;