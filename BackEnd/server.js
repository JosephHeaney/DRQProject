const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const path = require('path')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname, '../build')))
app.use('/static', express.static(path.join(__dirname, 'build//static')))

const myConnectionString = 'mongodb+srv://admin:Drumlish1@cluster0.r20vq.mongodb.net/items?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

const Schema = mongoose.Schema;

var itemSchema = new Schema({
    name: String,
    price: String,
    image: String
})

var itemModel = mongoose.model("items", itemSchema);

app.get('/api/items', (req, res) => {
    itemModel.find((err, data) => {
        res.json(data);
   })
})

app.get('/api/items/:id', (req, res) => {
    console.log(req.params.id)

    itemModel.findById(req.params.id, (err, data) => {
        res.json(data)
    })
})

app.put('/api/items/:id', (req, res) => {
    console.log("Update Item: " + req.params.id)
    console.log(req.body)

    itemModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data)
        })
})

app.delete('/api/items/:id', (req, res) => {
    console.log("Delete Item: " + req.params.id)

    itemModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data)
    })
})

app.post('/api/items', (req, res) => {
    itemModel.create({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image
    })

    res.send('Item Added')
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})