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
    try {
        console.log("Post Data votaciones")
        const votacion = new votacionSchema(req.body);
        let result = await votacion.save();
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