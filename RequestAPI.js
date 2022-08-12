import axios from "axios";
// import { ShowToastLongCenter } from "./components/alerts/ShowToast";

// axios.defaults.baseURL = 'http://209.150.148.19:2500/api/';


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


class RequestAPI {
    static Get = async (URL) => {
        return await axios.get(URL);
    }

    static GetWithParams = async (URL, Params) => {
        return await axios.get(URL, Params);
    }

    static Post = async (URL, Data) => {
        return await axios.post(URL, Data);
    
        
    } 
};

export default RequestAPI;