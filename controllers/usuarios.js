
const usuarioSchema = require('../models/usuario')
const service = require('../services/usuarios')

exports.getAllData = async(req, res) => {
    const allData = await service.getAllData(req,res);
    res.send({status:"OK", data: allData});
}

exports.getOnlyEmails = async(req, res) => {
    const data = await service.getOnlyEmails(req,res);
    res.send({status:"OK", data: data});
}

exports.getDataByEmail = async(req, res) => {
    const data = await service.getDataByEmail(req,res);
    res.send({status:"OK", data: data});
}

exports.getExistUser = async(req, res) => {
    const data = await usuarioSchema.findOne({email:req.params.email});
    console.log(data)
    if( data == null){
            // Dice si existe algun usuario con ese email
            res.send({status:"ERROR", data:null, message: "El usuario no existe"})
    }else{
        // Si la data no es null, significa que el usuario ya existe
        res.send({status:"OK", data: null, message: "Usuario existente"})
    }
}

exports.postDataRegister = async (req,res) => {
    const data = await usuarioSchema.findOne({email:req.params.email});
    console.log(data)
    if( data == null){
        // Validar tamaño contraseña
        if (req.body.password.length == 0) {
            res.send({status:"ERROR1", data: null, message: "La contraseña es demasiado corta"})
        }else if ( !req.body.password.match(/[A-z]/) ) {
            //validar letra
            res.send({status:"ERROR2", data: null, message: "La contraseña debe tener al menos una letra"})
        }else if ( !req.body.password.match(/[A-Z]/) ) {
            //validar letra mayuscula
            res.send({status:"ERROR3", data: null, message: "La contraseña debe tener al menos una letra mayuscula"})
        } else if ( !req.body.password.match(/\d/) ) {
            //validar numero
            res.send({status:"ERROR4", data: null, message: "La contraseña debe tener al menos un numero"})
        } else{
            // Al pasar las vadlidaciones se crea el usuario
            const data = await service.postData(req,res)
            res.send({status:"OK", data:data, message: "El usuario ha sido creado"})
        }

    }else{
        // Si la data no es null, significa que el usuario ya existe
        res.send({status:"ERROR", data: null, message: "Usuario existente"})
    }
    
}