const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Apartment = require('./models/apartment');
const Client = require('./models/client');
require('dotenv').config();

var options = {index: "operator.html"}

mongoose.connect(process.env.API_KEY)

app.listen(3000, () => {
    console.log('listening on port 3000');
});

app.use('/', express.static('../client', options));
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));

app.post('/api/addApartment', async (req, res) => {
    const {apartmentID, clientID, image, lightOne, lightTwo, lightThree} = req.body;
    try {
        const response = await Apartment.create({
            apartmentID,
            clientID,
            image,
            lightOne,
            lightTwo,
            lightThree
        });
    } catch (error) {
        throw error;
    }
    res.json({status: "ok"})
});

app.post('/api/addPerson', async (req, res) => {
    const {clientID, apartmentID, firstname, lastname, username, phone} = req.body;
    try {
        const response = await Client.create({
            clientID,
            apartmentID,
            firstname,
            lastname,
            username,
            phone
        });
    } catch (error) {
        throw error;
    }
    res.json({status: "ok"})
});

app.post('/api/updateApartment', async (req, res) => {
    const {apartmentID, clientID, image, lightOne, lightTwo, lightThree} = req.body;
    let conditions = {'apartmentID': apartmentID}
    Apartment.updateOne(conditions, req.body).then(
        doc => {
            if (!doc) {return res.status(404).end();}
            return res.status(200).json(doc);
        })
        .catch(err => next(err))
});

app.post('/api/updatePerson', async (req, res) => {
    const {clientID, apartmentID, firstname, lastname, username, phone} = req.body;
    console.log(req.body);
    let conditions = {'clientID': clientID}
    Client.updateOne(conditions, req.body).then(
        doc => {
            if (!doc) {return res.status(404).end();}
            return res.status(200).json(doc);
        })
        .catch(err => next(err))
});