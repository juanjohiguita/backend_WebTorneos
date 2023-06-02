const torneoSchema = require('../models/torneo')
const service = require('../services/torneos')

exports.getAllData = async(req, res) => {
    const allData = await service.getAllData(req,res);
    res.send({status:"OK", data: allData});
}

exports.getNamesMCSTournament = async(req, res) => {
    const data = await service.getNamesMCSTournament(req,res);
    res.send({status:"OK", data: data});
}



exports.getDataByEmail = async(req, res) => {
    const data = await service.getDataByEmail(req, res);
    res.send({status:"OK", data: data});
}

exports.getNamesByEmail = async(req, res) => {
    const data = await service.getNamesByEmail(req, res);
    res.send({status:"OK", data: data});
}

exports.postData = async (req,res) => {
    const data = await service.postData(req,res)
    res.send({status:"OK", data: data})
}    

