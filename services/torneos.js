const torneoSchema = require('../models/torneo')

exports.getAllData =  async(req, res) => {
    const data =  torneoSchema.find({});
    return(data);
}

exports.getOnlyNames = async(req, res) => {
    const data = await torneoSchema.find({},{nombre:1})
    return(data);
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