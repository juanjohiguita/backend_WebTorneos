const torneoSchema = require('../models/torneo')

exports.getAllData =  async(req, res) => {
    const data =  torneoSchema.find({});
    return(data);
}

exports.getOnlyNames = async(req, res) => {
    const data = await torneoSchema.find({},{nombre:1})
    return(data);
}

exports.getNamesMCSTournament = async(req, res) => {
    
    const data = await torneoSchema.findOne({_id:req.params.id_torneo}, {participantes:1, _id:0})
    return(data);
}

exports.getDataByEmail = async(req, res) => {
    const data = await torneoSchema.find({email_admin:req.params.email_admin});
    return(data);
}

exports.getNamesByEmail = async(req, res) => {
    const data = await torneoSchema.find({email_admin:req.params.email_admin}, {_id:1, nombre_torneo:1 });
    return(data);
}

exports.postData = async (req,res) => {
    try {
        console.log("Post Data Torneos")
        const torneo = new torneoSchema(req.body);
        let result = await torneo.save();
        result = result.toObject();
        if (result) {
            return(req.body);
            console.log(result);
        } else {
            return("ERROR");
        }

    } catch (e) {
        res.send({status:"ERROR", data:data, message: "ERROR"})
    }
}