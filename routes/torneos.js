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

router.get(`/${path}/busqueda/:email_admin/:nombre_competencia`, 
    controller.getNamesMCSTournament
);


router.get(`/${path}/busqueda/:email_admin`,
    controller.getDataByEmail
);

router.get(`/${path}/busquedaNombres/:email_admin`,
    controller.getNamesByEmail
);    
  
  
module.exports = router;  