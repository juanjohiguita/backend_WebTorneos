const express = require('express');
const router = express.Router();
const path = 'torneos'
const controller = require('../controllers/torneos')

router.post(`/${path}`,
    controller.postData
);


router.get(`/${path}`, 
    controller.getAllData
);

router.get(`/${path}/onlyNames`, 
    controller.getOnlyNames
);

router.get(`/${path}/busqueda/:email_admin`,
    controller.getDataByEmail
);
  
  
module.exports = router;  