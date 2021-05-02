import axios from 'axios';


const getContacts = (token, pageNum) => {

   
    return axios.get(`apis/Contacts/${token}/${pageNum}`);

}

export default getContacts;