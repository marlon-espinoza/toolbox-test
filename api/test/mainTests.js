const { expect, assert } = require('chai');
const externalFilesController = require('../Controller/external_api.controller');

// Results
const getFullFiles = externalFilesController.getFullFiles;
const getFile = externalFilesController.getFileByName;

describe('Files Controller', function() {

    it('Testing File 1: test1.csv', async function () {
        const valueExpected = {file: 'test1.csv', lines:[]}
        const valueGotten = await getFile('test1.csv');
        expect(valueExpected).to.eql(valueGotten);
    })

    it('Testing Get Full Data', async function () {
        const data = await getFullFiles();
        assert.equal(data.length, 7, 'Size data is not correct');
    })


})