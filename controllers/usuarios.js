
const usuarioSchema = require('../models/usuario')

exports.getData = async(req, resp) => {
    console.log("Get Data Usuarios")
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
        console.log("Post Data Usuarios")
        const user = new usuarioSchema(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("El usuario ya esta registrado");
        }

    } catch (e) {
        resp.send("Correo ya esta registrado");
    }
}