'use strict';
const util = require('util');
const {getAllCustomer} = require('../repositories/customers')

module.exports = {
    getCustomers
};

function getCustomers(req, res) {
    getAllCustomer().then((response)=>{
        res.json(response);
    }) 
}
  