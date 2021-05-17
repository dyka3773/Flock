import axios from 'axios';


const editAccount = (token, acc, type) => {
    if (type === 1)//company
        return axios.put(`apis/Companies/${token}`, acc);
    else
        return axios.put(`apis/BusinessPersonals/${token}`, acc);
}

export default editAccount;