import axios from 'axios';

export const personalSignup = (pers) => {
    const resp = axios.post("https://localhost:44363/apis/BusinessPersonals", pers);
    return resp;



}

export const companySignup = (comp) => {
    const resp = axios.post("https://localhost:44363/apis/Companies", comp);
    return resp;
}