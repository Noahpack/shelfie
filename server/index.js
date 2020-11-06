require("dotenv").config();
const express = require ('express');
const controller = require ('./controller');
const massive = require('massive');

const app = express();

const {SERVER_PORT, CONNECTION_STRING}=process.env;

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set("db", db)
    console.log("connected to the mind")
}).catch(err => console.log(err))

app.get('/api/inventory', controller.getInventory);
app.post('/api/product', controller.addProduct)


app.listen( SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}, Master Swami`)
} )


