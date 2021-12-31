'use strict';
const util = require('util');
const {saveCustomer} = require('../repositories/customers')

module.exports = {
    createCustomer
};

function createCustomer(req, res) {
    // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}

    saveCustomer(req.body).then((saved)=>{
        res.json(saved);
    })
    // this sends back a JSON response which is a single string
    
  }
  