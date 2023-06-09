const express = require('express');
const router = express.Router();
const path = 'torneos'
const controller = require('../controllers/torneos')

router.post(`/${path}/:email_admin/:nombre_torneo`,
    controller.postData
);


router.get(`/${path}`, 
    controller.getAllData
);

router.get(`/${path}/busqueda/nombres`,
    controller.getAllNames
);    

router.get(`/${path}/busqueda/participantes/:id_torneo`, 
    controller.getNamesMCSTournament
);

router.get(`/${path}/busqueda/jueces/:id_torneo`, 
    controller.getNamesJuecesTournament
);


router.get(`/${path}/busqueda/:email_admin`,
    controller.getDataByEmail
);

router.get(`/${path}/busquedaNombres/:email_admin`,
    controller.getNamesByEmail
);    

router.put(`/${path}/participantes/:_id/:aka_participante`,
    controller.putNuevoParticipante
);

router.put(`/${path}/jueces/:_id/:aka_juez`,
    controller.putNuevoJuez
);
  
  
module.exports = router;  