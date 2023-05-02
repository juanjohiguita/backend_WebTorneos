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
    console.log("Get Data Formatos")
    const data = await formatoSchema.find({nombre: req.params.nombre})
    res.send(data);
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
      
    // If you see App is working means
    // backend working properly
    res.render
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