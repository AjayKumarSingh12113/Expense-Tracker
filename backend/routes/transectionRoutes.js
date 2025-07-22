const express = require("express");
const { addTransection, getALLTransection } = require("../controllers/transectionCtrl");

const router = express.Router();

 //add transection post method 
 router.post('/add-transection' , addTransection);

 router.post("/get-transection",getALLTransection);
module.exports = router;