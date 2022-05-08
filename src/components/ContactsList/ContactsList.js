import React from "react";
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactListItem';
import { useFetchContactsQuery, useDeleteContactMutation } from "redux/contactSlice";

export default function ContactsList() {
    const { data: contacts } = useFetchContactsQuery();
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
    const filters = useSelector(state => state.filter);

    const filteredContacts = () => {
    const normalizeFilter = filters.toLowerCase();
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter)
      )
    );
    };
    
    const filterContact = filteredContacts();
    return (
        <>
            <ul>
                {filterContact && (
                    <ContactItem
                        contacts={filterContact}
                        onDelete={deleteContact}
                        deleting={isDeleting}/>        
                )}
            </ul>
        </>
    );
};