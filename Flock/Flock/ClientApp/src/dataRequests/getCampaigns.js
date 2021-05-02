import axios from 'axios';


const getCampaigns = (token, pageNum) => {


    return axios.get(`apis/Campaigns/${token}/${pageNum}`);

}

export default getCampaigns;