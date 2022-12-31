import axios from "axios";

class RestClient {

    static instanceAxios = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    });

    static getFiles = () => {
      return RestClient.instanceAxios.get('/files/data')
    }

}

export default RestClient;