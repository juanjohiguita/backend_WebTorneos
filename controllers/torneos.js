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

exports.postData = async (req,res) => {
    try {
        console.log("Post Data Formatos")
        const torneo = new torneoSchema(req.body);
        let result = await torneo.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            res.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }

    } catch (e) {
        res.send("Something Went Wrong");
    }
}