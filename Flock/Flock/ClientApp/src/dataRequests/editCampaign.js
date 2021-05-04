import axios from 'axios';

const editCampaign = (token, campaign) => {
    return axios.put(`apis/Campaigns/${token}`, campaign)
}

export default editCampaign;