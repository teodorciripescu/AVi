const {getChartData} = require('../../../models');

module.exports = async (req, res) => {
    const obj = await getChartData(req.body);
    //console.log(obj);
    res.statusCode = obj.status;

    return res.end(JSON.stringify(obj));
};