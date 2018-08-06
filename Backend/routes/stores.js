let storeService = require('../services/store.service')
let jwt = require('jsonwebtoken')
let Store = require('../models/store.model')
let storeSelector = require('../models/storeselector.model')
let express = require('express');
let router = express.Router();
let config = require('../db/config')

/* GET users listing. */
router.use(function (req, res, next) {
  next();

  // console.log("In use")
  //   var token = req.body.token || req.query.token || req.headers['Authorization']
  //   console.log("Token = :" + token)
  //   if (token) {
  //       console.log("Why here!")
  //       jwt.verify(token, config.secret, (err, decoded) => {
  //           if (err) {
  //               return res.send(null)
  //           }
  //           else {
  //               req.decoded = decoded
  //               next();
  //           }
  //       })
  //   } else {
  //       console.log("No Token")
  //       return res.json(null)
  //   }
});
router.get('/', function (req, res, next) {
    console.log("In GET")
    storeService.getStoreList(function cb(storeList) {
        console.log("In Get Stores")
        console.log(storeList[0])

        res.status(200).send(storeList)
    })

})
;

router.get('/:id(\\d+)', function (req, res, next) {

    storeService.getSomething(req.params.id, function cb(store) {
        res.status(200).send(store)

    })
});

router.get('/:id(\\d+)/attr', function (req, res, next) {
  console.log("IN HERE")
  storeService.getAttribs(req.params.id, function cb(attribs) {
    console.log("Attribs are" + attribs)
    res.send(200, attribs)
  })
});
router.get('/:id(\\d+)/commequip', function(req,res,next) {
  console.log("IN HERE")
  storeService.getCommInfo(req.params.id, function cb(commEquip) {
    let lastDigit = 0
    console.log("CommEquip Start")
    console.log(commEquip.commEquipmentID)
    if (commEquip.commEquipmentID == 3 || commEquip.commEquipmentID == 1) {
      lastDigit = 4
    }
      else if(commEquip.commEquipmentID >=20){
      lastDigit = commEquip.commEquipmentID
    }
    else{
      lastDigit = 10
    }
    console.log('Last digit = ' + lastDigit)
    commEquip.ipAddress = commEquip.ipAddress.replace(/((.*?\.){3})(\d+)/,"$1"+lastDigit)
    console.log("Comm ID is" + commEquip.ipAddress)

    res.send(200, commEquip)

  })
  console.log("Got here")
});
router.post('/updateattribs', function (req, res) {
    var attribkey = req.body.attributeKey;
    var value = req.body.attributeValue;
    console.log('attribkey = '+attribkey)
    console.log('value =' + value)
    storeService.updateAttrib(value, attribkey, success => {
        res.status(200).send(success)
    })


})

module.exports = router;
