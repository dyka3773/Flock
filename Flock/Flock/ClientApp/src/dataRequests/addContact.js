import axios from 'axios';

const addContact = (contact, token, gid) => {
    return axios.post(`https://localhost:44363/apis/Contacts/${token}/${gid}`, contact);
}

export default addContact;