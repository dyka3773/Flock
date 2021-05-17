import axios from 'axios';

export const personalSignup = (pers) => {
    const resp = axios.post("apis/BusinessPersonals", pers);
    return resp;



}

export const companySignup = (comp) => {
    const resp = axios.post("apis/Companies", comp);
    return resp;
}