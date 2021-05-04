import axios from 'axios';


const getCampaigns = (token, pageNum=1, query = "", numOfRows=50) => {


    return axios.get(`apis/Campaigns/${token}/${pageNum}/${numOfRows}/${query}`);

}

export default getCampaigns;