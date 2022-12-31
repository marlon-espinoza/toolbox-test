/**
 * Convert CSV to JSON Array.
 * @param {string} csv 
 * @returns 
 * @author https://www.geeksforgeeks.org/how-to-convert-csv-to-json-file-and-vice-versa-in-javascript/?ref=rp
 */
const convertCsvToJSON = (csv) => {
    const lines = csv.split('\n');
    const keys = lines[0].split(',');
    return lines.slice(1).map(line => {
        return line.split(',').reduce((acc, cur, i) => {
            const toAdd = {};
            if (keys[i] && cur) {
                toAdd[keys[i]] = cur;
                return { ...acc, ...toAdd };
            }
        }, {});
    });
}

module.exports = {
    convertCsvToJSON
}