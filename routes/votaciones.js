const express = require('express');
const router = express.Router();
const path = 'votaciones'
const controller = require('../controllers/votaciones')

router.post(`/${path}`,
    controller.postData
);


router.get(`/${path}`, 
    controller.getData
);
  
module.exports = router;  