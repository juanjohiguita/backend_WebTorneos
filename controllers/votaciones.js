const votacionSchema = require('../models/votacion')
const service = require('../services/votaciones')

exports.getAllData = async(req, res) => {
    const allData = await service.getAllData();
    res.send({status:"OK", data: allData});
}

exports.getOnlyNameCompetition = async(req, res) => {
    const data = await service.getOnlyNameCompetition();
    res.send({status:"OK", data: data});
}

exports.postData = async (req,res) => {
    const data = await service.postData(req,res)
    res.send({status:"OK", data: data})
}