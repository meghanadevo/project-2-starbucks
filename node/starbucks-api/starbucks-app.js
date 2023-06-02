let express = require('express');
let app = express();
let port = 1531;
let {dbConnect,getData} = require('./controller/dbcontroller');

app.get('/',(req,res) => {
    res.send('Hi From express')
})
//get main menu
app.get('/food',async (req,res)=>{
    let query = {};
    let collection = "food"
    let output = await getData(collection,query)
    res.send(output)
})


// get all location
app.get('/city',async (req,res)=>{
    let query = {};
    let collection = "city"
    let output = await getData(collection,query)
    res.send(output)
})
//get the stores area data
app.get('/area', async(req,res) => {
    let query = {}
    if(req.query.cityId){
        query={city_id: Number(req.query.cityId)}
    }else{
        query = {}
    }
    let collection = "area";
    let output = await getData(collection,query);
    res.send(output)
})
//get the store data
app.get('/storedata', async(req,res) => {
    let query = {}
    let collection = "area"
    let output = await getData(collection,query)
    res.send(output)
  
})

app.listen(port,(err) => {
    dbConnect()
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})
