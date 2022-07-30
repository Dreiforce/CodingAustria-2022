var express = require('express');
var app = express();


var tasklist = [{
    "id": "1",
    "name": "Water the tree",
    "description": "",
    "iconUrl": "assets/water-the-plant.png",
    "steps": [
        "Take watering can",
        "Fill with water",
        "Water the tree"
    ],
    "location": [48.1969332,15.9094212]
},{
    "id": "2",
    "name": "Pickup bulk waste from sidewalk",
    "description": "",
    "iconUrl": "assets/bulk-waste.jpg",
    "steps": [
        "You'll need a car or truck",
        "Pickup the bulk waste",
        "Bring the waste to the skip"
    ],
    "location": [48.1939332,15.9074212]
}]

console.log(__dirname)
//setting middleware
app.use(express.static(__dirname + '/src')); //Serves resources from src
app.use(express.static(__dirname + '/node_modules/leaflet/dist'))
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'))


const api = express.Router()
api.get('/task/', (req, res, next) => {
    // render a regular page
    res.send(tasklist)
})
api.get('/task/:id', (req, res, next) => {
    // render a regular page
    res.send(tasklist.filter(s => {
        console.log(s.id + " " + req.params.id)
        return s.id === req.params.id
    }))
})

app.use('/api', api)


var server = app.listen(5000);
console.log('Node.js web server at port 5000 is running..')