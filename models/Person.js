const mongoose = require('mongoose')

//Criação do model do usuario
const Person = mongoose.model('Person', {
    id: Number,
    createdAt: Date,
    fullName: String,
    emailUser: String,
    addresses:{
        addressId: Number,
        address: String,
        country: String,
        countryCode: String,
        city: String,
        state: String,
        zipcode: String
    },
    contacts:{
        contactId: Number,
        name: String,
        phoneNumber: Number,
        emailContact: String
    }

})

//Exportação do usuário
module.exports = Person