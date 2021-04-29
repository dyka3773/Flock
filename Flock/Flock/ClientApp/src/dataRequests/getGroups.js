import axios from 'axios';

const getGroups = async (token) => {
    const resp = await axios.get(`https://localhost:44363/apis/Groups/${token}`);
    return resp.data;
}

export default getGroups;