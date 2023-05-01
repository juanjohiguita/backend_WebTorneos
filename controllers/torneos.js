const torneoSchema = require('../models/torneo')

exports.getAllData = async(req, res) => {
    console.log("Get Data Formatos")
    const data = await torneoSchema.find({})
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