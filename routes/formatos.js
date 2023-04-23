const express = require('express');
const router = express.Router();
const path = 'formatos'
const formatoSchema = require('../models/formato')

router.get(`/${path}`, async (req, resp) => {
    const data = await formatoSchema.find({})
    resp.send(data);
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
      
    // If you see App is working means
    // backend working properly
    resp.render
  });
  
module.exports = router;  