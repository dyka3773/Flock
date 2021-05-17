import axios from 'axios';

const login = async (email, password) => {
    const response = await axios.get(`apis/Accounts/login/${email}/${password}`);
    return response.data;
}

export default login;
