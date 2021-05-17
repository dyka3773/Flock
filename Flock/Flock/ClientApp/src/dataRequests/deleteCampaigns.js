import axios from 'axios';

export const deleteCampaigns = (camps, token) => {
    return axios.delete(`apis/Campaigns/multipleDelete/${token}`, { data: camps })

}