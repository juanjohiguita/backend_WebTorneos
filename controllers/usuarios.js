
const usuarioSchema = require('../models/usuario')
const service = require('../services/usuarios')

exports.getAllData = async(req, res) => {
    const allData = await service.getAllData();
    res.send({status:"OK", data: allData});
}

exports.getOnlyEmails = async(req, res) => {
    const data = await service.getOnlyEmails();
    res.send({status:"OK", data: data});
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