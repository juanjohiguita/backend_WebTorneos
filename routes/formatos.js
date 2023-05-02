const express = require('express');
const router = express.Router();
const path = 'formatos'
const controller = require('../controllers/formatos')

router.post(`/${path}`,
    controller.postData
);

router.get(`/${path}`, 
    controller.getAllData
);

router.get(`/${path}/onlyNames`, 
    controller.getOnlyNames
);

router.get(`/${path}/busqueda/:nombre`, 
    controller.getByName
);
  
  
module.exports = router;  