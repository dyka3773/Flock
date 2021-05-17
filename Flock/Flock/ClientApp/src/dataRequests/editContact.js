import axios from 'axios';

const editContact = (token, contact) => {
    return axios.put(`apis/Contacts/${token}`, contact)
}

export default editContact;