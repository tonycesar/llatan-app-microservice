'use strict';
const util = require('util');
const {getAllCustomer} = require('../repositories/customers')
const {ageFormBirthDate} = require('../helpers/age')

module.exports = {
    getStatistics
};

function getStatistics(req, res) {
    getAllCustomer().then((allCustomer)=>{
        const ages = allCustomer.map(customer => {
            const birthDate = new Date(customer.birthDate);
            return ageFormBirthDate(birthDate);
        });
        const avg = ages.reduce((a,b)=> a+b)/ ages.length;
        const sumTotalOfAgeLessAvgToPow = ages.map(age => Math.pow(age-avg, 2)).reduce((a,b) => a+b)
        const standardDeviation  = Math.sqrt(sumTotalOfAgeLessAvgToPow/(ages.length-1))
        res.json({promedio: avg, desviacion: standardDeviation});
    }) 
}
  