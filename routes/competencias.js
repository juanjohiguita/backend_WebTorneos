const express = require('express');
const router = express.Router();
const path = 'competencias'
const controller = require('../controllers/competencias')

router.post(`/${path}`,
    controller.postData
);


router.get(`/${path}`, 
    controller.getData
);
  
  
module.exports = router;  
