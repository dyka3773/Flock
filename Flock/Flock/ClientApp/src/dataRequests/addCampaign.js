import axios from 'axios';

export const addCampaign = (campaign, token, gid, fid) => {

    return axios.post(`apis/Campaigns/${token}/${gid}`, { ...campaign, frequency:fid });
}
