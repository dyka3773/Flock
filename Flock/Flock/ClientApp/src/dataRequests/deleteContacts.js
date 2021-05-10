import axios from 'axios';

export const deleteContacts = (contacts, token) => {
    return axios.delete(`apis/Contacts/multipleDelete/${token}`, { data: contacts })

}