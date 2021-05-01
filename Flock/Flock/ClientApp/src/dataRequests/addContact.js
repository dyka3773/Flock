import axios from 'axios';

export const addContact = (contact, token, gid) => {
    return axios.post(`apis/Contacts/${token}/${gid}`, contact);
}

export const addManyContacts = (contact, token, gid) => {
    return axios.post(`apis/Contacts/multiplePost/${token}/${gid}`, contact);
}
