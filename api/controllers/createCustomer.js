'use strict';
const util = require('util');
const {saveCustomer} = require('../repositories/customers')

module.exports = {
    createCustomer
};

function createCustomer(req, res) {
    const { name, lastname, age, birthDate } =  req.body;
    saveCustomer({ name, lastname, age, birthDate }).then((id)=>{
        res.json({id, name, lastname, age, birthDate});
    }) 
}
  