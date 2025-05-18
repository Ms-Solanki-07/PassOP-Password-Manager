const express = require('express')
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');

dotenv.config()

// Connection URL
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

// Database Name
const dbName = 'passop';
const app = express()
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Use connect method to connect to the server
client.connect();

// get the password
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})

// save the password
app.post('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password)
    res.send({ success: true, result: findResult })
})

// delete the password
app.delete('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password)
    res.send({ success: true, result: findResult })
})


app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
})
