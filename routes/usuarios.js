const express = require('express');
const router = express.Router();
const path = 'usuarios'
const controller = require('../controllers/usuarios')


// ruta va a ser /user GET
router.post(`/${path}/registro`,
    controller.postDataRegister
);

router.post(`/${path}/registroGoogle/:email`,
    controller.postData
);

router.get(`/${path}/busqueda/:email`, 
    controller.getDataByEmail
);

router.get(`/${path}/busqueda/existe/:email`, 
    controller.getExistUser
);


router.get(`/${path}`, 
    controller.getAllData
);

router.get(`/${path}/onlyEmails`, 
    controller.getOnlyEmails
);
  
module.exports = router;  