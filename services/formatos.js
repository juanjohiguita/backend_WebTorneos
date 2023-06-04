const formatoSchema = require('../models/formato')

exports.getAllData = async(req, res) => {
    const data =  await formatoSchema.find({});
    return(data);
}

exports.getOnlyNames = async(req, res) => {
    const data = await formatoSchema.find({},{nombre:1})
    return(data);
}

exports.getByName = async(req, res) => {
    const data = await formatoSchema.find({nombre:req.params.nombre})
    res.send(data);
}

exports.postData = async (req,res) => {
    try {
        console.log("Post Data Formatos")
        const formato = new formatoSchema(req.body);
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