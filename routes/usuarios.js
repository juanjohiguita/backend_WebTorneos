const express = require('express');
const router = express.Router();
const path = 'usuarios'
const controller = require('../controllers/usuarios')


// ruta va a ser /user GET
router.post(`/${path}`,
    controller.postData
);


router.get(`/${path}`, 
    controller.getData
);
  
module.exports = router;  