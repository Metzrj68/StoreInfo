let dbConn = require('../db/dbConn');
let Store = require('../models/store.model');
let StoreService = {
  getSomething: function (id, cb) {
    let sqlString = 'Select storeKey as key, storeName as name from Stores where storeKey between 5 and 10'
    dbConn.getData(sqlString, [], function (err, data) {
      return cb(data)
    });

  },

  getAttribs: function (id, cb) {
    let attribString = 'Select * from StoreInfo where storeKey = ?';
    let commString = 'Select * from StoreCommEquipment where StoreID = ?'

    dbConn.getData(attribString, [id], function (err, data) {
      console.log("ID is : " + [id])
      return cb(data)
    })
  },

  getStoreList: function (cb) {
    let sqlString = 'Select * from ReidView';
    dbConn.getData(sqlString, [], function (err, data) {
      console.log('Store list is: ');
      console.log(data)
      return cb(data);
    });
  },
  updateAttrib: function (value, key, cb) {
    console.log(`update StoreAttributeValue set attributeValue = ${value} where rowID = ${key}`)
    let sqlString = "update StoreAttributeValue set attributeValue = ? where rowID = ?";
    dbConn.getData(sqlString, [value, key], function (err, data) {
      if (err) {
        cb(false)
      }
      else {
        cb(true)
      }
    })
  },
  getCommInfo:function(id, cb) {
    let commString = 'Select * from StoreCommEquipment where StoreID = ?'
    dbConn.getData(commString, [id], (err, data2) => {
      console.log('Data2 is: ' + data2)
      return cb(data2[0]);
    })
  }
};


module.exports = StoreService


