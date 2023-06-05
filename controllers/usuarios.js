
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
        res.send({status:"OK", data: data.aka, message: "Usuario existente"})
    }
}

exports.postData = async (req,res) => {
    const data = await usuarioSchema.findOne({email:req.params.email});
    if( data == null){
        const data = await service.postData(req,res)
        res.send({status:"OK", data: data})
    }else{
        res.send({status:"ERROR", data: null, message: "Usuario existente"})
    }
}

exports.postDataRegister = async (req,res) => {
    const data = await usuarioSchema.findOne({email:req.body.email});
    if( data == null){
        
        if (req.body.nombre.length == 0) {
            //valida que el nombre no este vacio
            res.send({status:200, data: null, message: "Debe ingresar un nombre"})
        }else if (req.body.apellido.length == 0) {
            //valida que el appelido no este vacio
            res.send({status:201, data: null, message: "Debe ingresar un apellido"})
        }else if (req.body.aka.length == 0) {
            //valida que el aka no este vacio
            res.send({status:202, data: null, message: "Debe ingresar un aka"})
            
        }else if(req.body.email.length == 0){
            //valida que el email no este vacio
            res.send({status:98, data: null, message: "Debe ingresar un correo"})

            //TOCA HACER UNO PARA QUE EL CORREO TENGA FORMATO DE CORREO 
        }else if (req.body.password.length < 5) {
            res.send({status:100, data: null, message: "La contraseña es demasiado corta"})
        }else if ( !req.body.password.match(/[A-z]/) ) {
            //validar letra
            res.send({status:101, data: null, message: "La contraseña debe tener al menos una letra"})
        }else if ( !req.body.password.match(/[A-Z]/) ) {
            //validar letra mayuscula
            res.send({status:102, data: null, message: "La contraseña debe tener al menos una letra mayuscula"})
        }else if ( !req.body.password.match(/\d/) ) {
            //validar numero
            res.send({status:103, data: null, message: "La contraseña debe tener al menos un numero"})
        }else if ( !req.body.password.match(/[^a-zA-Z\d]/) ) {
            //validar numero
            res.send({status:104, data: null, message: "La contraseña debe tener al menos un caracter especial"})
        }else{
            // Al pasar las vadlidaciones se crea el usuario
            const data = await service.postData(req,res)
            res.send({status:"OK", data:data, message: "El usuario ha sido creado"})
        }

    }else{
        // Si la data no es null, significa que el usuario ya existe
        res.send({status:99, data: null, message: "Usuario existente"})
    }
    
}


