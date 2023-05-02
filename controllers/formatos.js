const formatoSchema = require('../models/formato')
const service = require('../services/formatos')

exports.getAllData = async(req, res) => {
    const allData = await service.getAllData();
    res.send({status:"OK", data: allData});
}

exports.getOnlyNames = async(req, res) => {
    const data = await service.getOnlyNames();
    res.send({status:"OK", data: data});
}

exports.getByName = async(req, res) => {
    const data = await service.getByName(req,res)
    res.send({status:"OK", data: data});
}

exports.postData = async (req,res) => {
    const data = await service.postData(req,res)
    res.send({status:"OK", data: data})
}

