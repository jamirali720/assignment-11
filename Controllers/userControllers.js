const registerValidator = require('../Validator/RegisterValidator');
const User = require('../model/User');
const loginValidator= require('../LoginValidator/LoginValidator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const {serverError, resourceError} = require('../Utils/Error')


module.exports = {
    login(req, res) {
        const {email, password} = req.body;
      
        const validate = loginValidator({email, password})
        if(!validate.isValid){
            return res.status(400).json(validate.error)
        }else  {
            User.findOne({email})
            .then( user =>  {
                if(!user){
                    return resourceError(res, "user not found")
                }
                bcrypt.compare(password, user.password, (err, result) => {
                    if(err){
                        return resourceError(res, error)
                    }
                    if(!result){
                        return resourceError(res,  " password not matched")
                    }
                    let token = jwt.sign({
                        _id: user._id,
                        name: user.name,
                        email: user.email
                    },  "SECRET", {expiresIn: "2h"})

                    res.status(200).json({
                        message: ' User Login  successfully', 
                        token: `Bearer ${token}` 
                    })
                })
            })
            .catch(error=> serverError(res, error))
        }
    
    },

    register(req, res){
        let {name, email, password, confirmedPassword} = req.body;
        let validate = registerValidator({name, email, password, confirmedPassword});

        if(!validate.isValid){
            res.status(400).json(validate.error)
        }else {         
           User.findOne({email})
           .then( user => {
              if(user){
                return  res.status(500).json({ message: "Email Already Exist"})
              }

              bcrypt.hash(password, 11, (err, hash) => {
                    if(err){
                        res.status(500).json({message: "server is error"})
                    }
                    let user = new User({
                        name, 
                        email,
                        password: hash
                    });
                   user.save()
                   .then( user => {
                    res.status(201).json({message: 'user created successfully', user})
                    
                   }).catch(error => {
                       res.status(500).json({message: " something is wrong"})
                   })
              })
               
           })
           .catch(error => {
               console.log(error)
               res.status(400).json( {message: 'Something is wrong '})
           })
        }
    }
    
}