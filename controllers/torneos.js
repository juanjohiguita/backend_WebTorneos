const torneoSchema = require('../models/torneo')
const service = require('../services/torneos')

exports.getAllData = async(req, res) => {
    const allData = await service.getAllData();
    res.send({status:"OK", data: allData});
}

exports.getOnlyNames = async(req, res) => {
    const data = await service.getOnlyNames();
    res.send({status:"OK", data: data});
}

exports.getDataByEmail = async(req, res) => {
    const data = await service.getDataByEmail();
    res.send({status:"OK", data: data});
}

exports.postData = async (req,res) => {
    const data = await service.postData(req,res)
    res.send({status:"OK", data: data})
}    