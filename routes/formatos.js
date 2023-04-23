const express = require('express');
const router = express.Router();
const path = 'formatos'
const controller = require('../controllers/formatos')

router.post(`/${path}`,
    controller.postData
);


router.get(`/${path}`, 
    controller.getData
);
  
  
module.exports = router;  