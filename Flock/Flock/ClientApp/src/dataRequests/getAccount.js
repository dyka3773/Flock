import axios from 'axios';

 export const getAccountFields = async (token) => {
    const resp = await axios.get(`apis/Accounts/getFields/${token}`)
    return resp.data;
}

export const getAccountBasic = async (token) => {
    const resp = await axios.get(`apis/Accounts/getBasic/${token}`)
    return resp.data;
}