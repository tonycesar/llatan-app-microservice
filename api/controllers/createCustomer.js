'use strict';
const { rmSync } = require('fs');
const util = require('util');
const {saveCustomer} = require('../repositories/customers')

module.exports = {
    createCustomer
};

function createCustomer(req, res) {
    const { name, lastname, age, birthDate } =  req.body;
    if (!name || !lastname || birthDate) {
        res.status(400).json({message: 'El nombre, apellido y fecha de nacimiento son requeridos'});
        return;
    }
    const parseDate = new Date(birthDate);
    if (parseDate > new Date() ||parseDate < new Date('1900-01-01')) {
        res.status(400).json({message: 'Seleccione una fecha valida'});
        return;
    }
    saveCustomer({ name, lastname, age, birthDate }).then((id)=>{
        res.json({id, name, lastname, age, birthDate});
    }) 
}
  