import axios from 'axios';


const getCampaigns = (token, pageNum=1, query = "", numOfRows=50, gid=0) => {


    return axios.get(`apis/Campaigns/${token}/${pageNum}/${numOfRows}/${gid}/${query}`);

}

export default getCampaigns;