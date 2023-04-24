const express = require('express');
const router = express.Router();
const path = 'competencias'
const controller = require('../controllers/competencias')




router.get(`/${path}`, 
    controller.getAllData
);

router.post(`/${path}`,
    controller.postData
);
  
  
module.exports = router;  
