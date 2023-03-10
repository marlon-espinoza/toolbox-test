const express = require('express');
const filesController = require("../Controller/files.controller");
const router = express.Router();

// router.get('/hello', filesController.hello);

router.get('/data', filesController.data);

router.get('/list', filesController.fileList);

module.exports = router;