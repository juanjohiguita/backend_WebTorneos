const usuarioSchema = require('../models/usuario')

exports.getAllData = () => {
    const data =  usuarioSchema.find({});
    return(data);
}

exports.getOnlyEmails = async(req, res) => {
    const data = await usuarioSchema.find({},{email:1})
    return(data);
}

exports.postData = async (req,res) => {
    try {
        console.log("Post Data Usuarios")
        const user = new usuarioSchema(req.body);
        let result = await user.save();
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