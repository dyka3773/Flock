import axios from 'axios';

export const addContact = (contact, token, gid) => {
    return axios.post(`apis/Contacts/${token}/${gid}`, contact);
}

export const addManyContacts = (contacts, token, gid) => {
    console.log(`apis/Contacts/multiplePost/${token}/${gid}`, contacts);


    return axios.post(`apis/Contacts/multiplePost/${token}/${gid}`, contacts)
        
}
