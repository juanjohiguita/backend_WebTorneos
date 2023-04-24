const formatoSchema = require('../models/formato')

exports.getAllData = async(req, resp) => {
    console.log("Get Data Formatos")
    const data = await formatoSchema.find({})
    resp.send(data);
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
      
    // If you see App is working means
    // backend working properly
    resp.render
}

exports.postData = async (req,resp) => {
    try {
        console.log("Post Data Formatos")
        const formato = new formatoSchema(req.body);
        let result = await formato.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }

    } catch (e) {
        resp.send("Something Went Wrong");
    }
}

