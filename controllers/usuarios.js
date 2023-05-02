
const usuarioSchema = require('../models/usuario')
const service = require('../services/usuarios')

exports.getAllData = async(req, res) => {
    const allData = await service.getAllData();
    res.send({status:"OK", data: allData});
}

exports.getOnlyEmails = async(req, res) => {
    const data = await service.getOnlyEmails();
    res.send({status:"OK", data: data});
}

exports.postData = async (req,res) => {
    const data = await service.postData(req,res)
    res.send({status:"OK", data: data})
}