const router = require ('express').Router()
const Person = require('../models/Person')

//rotas da API

//Create
router.post('/', async (req, res) =>{
    //req.body
    const{
        id, createdAt, fullName, emailUser, 
        addresses:{addressId, address, country, countryCode, city, state, zipcode},
        contacts:{contactId, name, phoneNumber, emailContact}        
    } = req.body

    if(!fullName){
        res.status(422).json({error: 'O nome é obrigatorio!'})
        return
    }

    const person = {
        id,
        createdAt,
        fullName,
        emailUser,    
        addresses:{
            addressId,
            address,
            country,
            countryCode,
            city,
            state,
            zipcode,  
        },
        contacts:{
            contactId,
            name,
            phoneNumber,
            emailContact
        }        
    }
    

    try{
        //criando os dados
        await Person.create(person)

        res.status(201).json({message:'Pessoa inserida no sistema com sucesso!'})

    } catch (error){
        res.status(500).json({error: error})
    }

})

//Read - leitura de todos os dados do banco
router.get('/', async (req, res) =>{
    try {
        
        const people = await Person.find()
        res.status(200).json(people)

    } catch (error) {
        res.status(500).json({error: error})       
    }

})

router.get('/:id', async (req, res) =>{
    //console.log(req)
    
    //extrair o dado da requisição
    const id = req.params.id

    try {
        //encontra o usuario pelo id do banco
        const person = await Person.findOne({id: id})

        if(!person){
            res.status(422).json({message: 'Usuário não foi encontrado!'})
            return
        }

        res.status(200).json(person)
        
    } catch (error) {
        res.status(500).json({error: error})  
    }


})




module.exports = router