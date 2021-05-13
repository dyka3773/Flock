import axios from 'axios';
import _ from 'lodash';

const editCampaign = (token, campaign) => {
   
    
    return axios.put(`apis/Campaigns/${token}`, _.omit(campaign, 'startDate', 'creationDate', 'endDate' ))
}

export default editCampaign;