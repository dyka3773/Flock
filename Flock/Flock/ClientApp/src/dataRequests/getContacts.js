import axios from 'axios';


const getContacts = (token, pageNum, query="", numOfRows=50) => {


    return axios.get(`apis/Contacts/${token}/${pageNum}/${numOfRows}/${query}`);

}

export default getContacts;