const { default: axios } = require("axios");
const { convertCsvToJSON } = require("../Utils");
const { getFiles } = require("./external_api.controller");
require('dotenv').config();

const externalApi = process.env.EXTERNAL_API_URL;
const token = process.env.EXTERNAL_API_TOKEN_AUTHORIZATION;

const hello = async (req, res) => {
    res.status(200).json({
        message: "Hello, the API is listening",
    });
};

const data = async (req, res) => {
    const data = await getFiles();

    res.status(200).json({
        message: "data returning",
        data: data
    });
};

module.exports = {
    hello,
    data
}