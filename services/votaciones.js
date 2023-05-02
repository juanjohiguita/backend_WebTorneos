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
        const formato = new formatoSchema(req.body);
        let result = await formato.save();
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
