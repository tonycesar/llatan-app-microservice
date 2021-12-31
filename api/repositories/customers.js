var admin = require("firebase-admin");

var serviceAccount = require("../../config/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://llatan-e276b-default-rtdb.firebaseio.com"
});

const db = admin.firestore();
const customersDb = db.collection('customers');

const generateUniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2);


const saveCustomer = async ({ name, lastname, age, birthDate }) => {
    const id = generateUniqueId();
    await customersDb.doc().set({ name, lastname, age, birthDate });
    return {id,  name, lastname, age, birthDate };
}

module.exports = {
    saveCustomer
}


