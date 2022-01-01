'use strict';
const util = require('util');
const {getAllCustomer} = require('../repositories/customers')
const {ageFormBirthDate} = require('../helpers/age')

module.exports = {
    getCustomers
};

function getCustomers(req, res) {
    getAllCustomer().then((allCustomer)=>{
        const ageAVGToDeath = 72;
        allCustomer.forEach(customer => {
            const birthDate = new Date(customer.birthDate);
            customer.age = ageFormBirthDate(birthDate);
            birthDate.setFullYear(birthDate.getFullYear() + ageAVGToDeath)
            customer.deathDate  = birthDate.getFullYear() + '-' + (birthDate.getMonth() + 1) + '-' + birthDate.getDate()
        }) 
        res.json(allCustomer);
    }) 
}


  