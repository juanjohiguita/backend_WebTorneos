const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Lo mas probable es que en este esquema este el problema o la conexion
const competenciaSchema = new Schema(
    {
        nombre_competencia:  {
            type:String
        },
        tipo_competencia: {
            type:String
        },
        descripcion: {
            type:String
        },
        ciudad: {
            type:String
        },
        fecha_inicio: {
            type:Date
        },
        fecha_finalizacion: {
            type:Date
        },
        numero_fechas: {
            type:Number
        },
        formato: {
            type: mongoose.Types.ObjectId
        },
        participantes: [{
            puntuacion_general: {   
                type: Number
            },
            aka_participante: {
                type:String
            }
        }],
        jueces: [{
            id_juez: {
                type: mongoose.Types.ObjectId
            },
            aka_juez: {
                type: String
            }
        }],
        administradores: [{
            id_admin: {
                type: mongoose.Types.ObjectId
            },
            email_admin: {
                type:String
            }
        }]
    },
    {
        timestamps:true
    }
);

// Crear el modelo
const Competencia = mongoose.model('Competencias', competenciaSchema);

module.exports = Competencia;