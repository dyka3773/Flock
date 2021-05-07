import axios from 'axios';


const getContacts = (token, pageNum, query="", numOfRows=50, gid = 0) => {


    return axios.get(`apis/Contacts/${token}/${pageNum}/${numOfRows}/${gid}/${query}`);

}

export default getContacts;