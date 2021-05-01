import axios from 'axios';

export const addGroup = (name, token) => {
   axios.post(`apis/Groups/${token}`, name);
}
