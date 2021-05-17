import axios from 'axios';

const getGroups = async (token) => {
    const resp = await axios.get(`/apis/Groups/${token}`);
    return resp.data;
}

export default getGroups;