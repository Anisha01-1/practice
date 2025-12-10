import axios from "axios";

const API = axios.create({
    baseURL: "https://boringapi.com/api/v1/photos"
});

export const getRanran = () =>{
    return API.get("");
}; 