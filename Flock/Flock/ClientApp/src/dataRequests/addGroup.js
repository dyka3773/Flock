import axios from 'axios';

const addGroup = (name, token) => {
    return axios.post(`apis/Groups/${token}/${name}`);
}

export default addGroup;