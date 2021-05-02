import axios from 'axios';

export const addCampaign = (campaign, token, gid) => {
    
    return axios.post(`apis/Campaigns/${token}/${gid}`, campaign);
}
