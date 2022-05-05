const db = require("../models");
const Contact = db.Contact;
const Op = db.Sequelize.Op;

module.exports = {
    getAllContacts: async (req, res) => { },
    getContactById: async (req, res) => { },
    createContact: async (req, res) => { 
        //request validation
        let error = {}
        if(!req.body.firstName || !req.body.lastName){
            error.nameError = "both firstname and lastname are required"
        }
        if(toString(req.body.firstName).length>20 || toString(req.body.lastName).length>20){
            error.nameInvalidError = "both firstname and lastname cannot be longer than 20 characters"
        }
        // if(!/^[A-Za-z]+$/.test(req.body.firstName) || !/^[A-Za-z]+$/.test(req.body.lastName)){
        //     error.nameInvalidError = "name can only contain alphabetic characters"
        // }
        if(!req.body.emailAddress){
            error.emailError = "email address is required"
        }
        // if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(req.body.emailAddress)){
        //     error.emailInvalidError = "email address is invalid"
        // }
        if(!req.body.contactTypeId){
            error.contactTypeIdError = "contactTypeId is required"
        }
        if(!req.body.companyName){
            error.companyNameError = "company name is required"
        }
        // if(!/^\d{6}$/.test(req.body.pincode)){
        //     error.pincodeInvalidError = "pincode is not valid"
        // }
        if(Object.keys(error).length !== 0){
            console.log(error, req.body);
            res.status(400).send(error)
            return
        }
        const contact = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailAddress: req.body.emailAddress,
            contactTypeId: req.body.contactTypeId,
            title: req.body.title,
            companyName: req.body.companyName,
            address1: req.body.address1,
            address2: req.body.address2,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
            country: req.body.country,
            mobileNumber: req.body.mobileNumber,
            buisnessPhone: req.body.buisnessPhone,
            companyId: req.body.companyId
          };
          // Saving contact in the database
          Contact.create(contact)
            .then(data => {
              res.send(data);
            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Contact."
              });
            });
    },
    DeleteContactById: async (req, res) => { },
}