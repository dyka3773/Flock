import axios from 'axios';


export const getCampsPageNum = (token,query="", numOfRows=50) => {
    return axios.get(`apis/Campaigns/GetNumOfPages/${token}/${numOfRows}/${query}`);
}

export const getContsPageNum = (token, query = "",  numOfRows=50) => {
    return axios.get(`apis/Contacts/GetNumOfPages/${token}/${numOfRows}/${query}`);
}