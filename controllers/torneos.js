const torneoSchema = require('../models/torneo')
const service = require('../services/torneos')

exports.getAllData = async(req, res) => {
    const allData = await service.getAllData(req,res);
    res.send({status:"OK", data: allData});
}

exports.getNamesMCSTournament = async(req, res) => {
    const data = await service.getNamesMCSTournament(req,res);
    res.send({status:"OK", data: data});
}

exports.getNamesJuecesTournament = async(req, res) => {
    const data = await service.getNamesJuecesTournament(req,res);
    res.send({status:"OK", data: data});
}

exports.getDataByEmail = async(req, res) => {
    const data = await service.getDataByEmail(req, res);
    res.send({status:"OK", data: data});
}

exports.getNamesByEmail = async(req, res) => {
    const data = await service.getNamesByEmail(req, res);
    res.send({status:"OK", data: data});
}

exports.postData = async (req,res) => {
    const data = await torneoSchema.findOne({email_admin:req.params.email_admin, nombre_torneo:req.params.nombre_torneo});
    if( data == null){
        // Validar tamaño contraseña
        if (req.params.nombre_torneo.length == 0) {
            console.log("Entra al if")
            res.send({status:100, data: null, message: "La competencia no tiene nombre"})
        }else if(req.body.numero_participantes.length == 0){
            console.log("Entra al else if numero participantes")
            //validar numero de participantes
            res.send({status:101, data: null, message: "Debe haber al menos un MC"})
        }else if(req.body.numero_fechas.length == 0){
            //validar numero de fechas
            res.send({status:102, data: null, message: "Debe haber al menos una fecha"})
        }else if(req.body.numero_jueces.length == 0){
            //validar numero de jueces
            res.send({status:103, data: null, message: "Debe haber al menos un juez"})
        }else{
            // Al pasar las vadlidaciones se crea el torneo
            
            const data = await service.postData(req,res)
            res.send({status:"OK", data:data, message: "El torneo ha sido creado"})
        }

    }else{
        // Si la data no es null, significa que el torneo ya existe
        res.send({status:99, data: null, message: "Ya tienes un torneo con ese nombre"})  
    }
}    


exports.putNuevoParticipante = async (req,res) => {
    
    const data = await torneoSchema.findOne({_id:req.params._id, participantes:{$elemMatch:{aka_participante:req.params.aka_participante}}});
    try{
        if( data == null){
            const data = await service.putNuevoParticipante(req,res);
            res.send({status:"OK", data: data, msg: "Se añadido el nuevo participante satisfactoriamente"});
        }else{
                res.send({status:100, data: null, msg: "Ya hay un participante con ese aka"});
        
        }
    }catch(e){
        res.send({status:101, data: null, msg: "Error"});
    }    
}

exports.putNuevoJuez = async (req,res) => {
    
    const data = await torneoSchema.findOne({_id:req.params._id, jueces:{$elemMatch:{aka_juez:req.params.aka_juez}}});
    console.log(data)
    try{
        if( data == null){
            const data = await service.putNuevoJuez(req,res);
            res.send({status:"OK", data: data, msg: "Se añadido el nuevo juez satisfactoriamente"});
        }else{
                res.send({status:100, data: null, msg: "Ya hay un juez con ese aka"});
        
        }
    }catch(e){
        res.send({status:101, data: null, msg: "Error"});
    }    
}




