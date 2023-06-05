const express = require('express');
const router = express.Router();
const path = 'torneos'
const controller = require('../controllers/torneos')

router.post(`/${path}/:email_admin`,
    controller.postData
);


router.get(`/${path}`, 
    controller.getAllData
);

router.get(`/${path}/busqueda/:id_torneo`, 
    controller.getNamesMCSTournament
);


router.get(`/${path}/busqueda/:email_admin`,
    controller.getDataByEmail
);

router.get(`/${path}/busquedaNombres/:email_admin`,
    controller.getNamesByEmail
);    

router.put(`/${path}/:_id/:aka_participante`,
    controller.putNuevoParticipante
);
  
  
module.exports = router;  