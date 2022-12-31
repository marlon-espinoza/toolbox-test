const axios = require('axios');
const { convertCsvToJSON } = require('../Utils');
require('dotenv').config();

const instanceAxios = axios.create({
    baseURL: process.env.EXTERNAL_API_URL,
    timeout: 30000,
    headers: {
      'Authorization': process.env.EXTERNAL_API_TOKEN_AUTHORIZATION
    }
});

const getFiles = async () => {
    const fileNames = await instanceAxios.get('secret/files')
                    .then(res => res.data.files)
                    .catch(err => null);

    const files = await Promise.all(fileNames.map(getFileByName));

    return files
}

const getFileByName = async (name) => {
    const file = await instanceAxios.get(`secret/file/${name}`)
                    .then(res => {
                        const { data } = res;
                        const lines = convertCsvToJSON(data);
                        return {file: name, lines};
                    })
                    .catch(err => {return {file: name,lines: null}});
    return file
}

module.exports = {
    getFiles,
    getFileByName
}