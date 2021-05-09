import axios from 'axios';

const deleteGroup = (gid, token) => {

    return axios.delete(`apis/Groups/${gid}/${token}`);

}

export default deleteGroup;