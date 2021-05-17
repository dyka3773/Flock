import axios from 'axios';

export const scheduleCampaign = (campaignId) => {

    return axios.post(`apis/Campaigns/sendCampaign/${campaignId}`);

}

export const scheduleCampaignOnce = (campaignId) => {

    return axios.post(`apis/Campaigns/sendCampaignOnce/${campaignId}`);

}
