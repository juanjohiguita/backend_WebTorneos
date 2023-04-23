
const usuarioSchema = require('../models/usuario')

exports.getData = async(req, resp) => {
    const data = await usuarioSchema.find({})
    resp.send(data);
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
      
    // If you see App is working means
    // backend working properly
    resp.render
}

exports.postData = async (req,resp) => {
    try {
        console.log("Intenta al menos")
        const user = new usuarioSchema(req.body);
        let result = await user.save();
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