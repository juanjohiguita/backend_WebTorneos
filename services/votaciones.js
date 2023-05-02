const votacionSchema = require('../models/votacion')

exports.getAllData = async(req, res) => {
    const data =  await votacionSchema.find({});
    return(data);
}

exports.getOnlyNameCompetition = async(req, res) => {
    const data = await votacionSchema.find({},{nombre_torneo:1})
    return(data);
}

exports.postData = async (req,res) => {
    try {
        console.log("Post Data Formatos")
        const formato = new votacionSchema(req.body);
        let result = await formato.save();
        result = result.toObject();
        if (result) {
            return(req.body);
            console.log(result);
        } else {
            return("ERROR");
        }

    } catch (e) {
        return("ERROR");
    }
}
