require('dotenv').config()
const express = require('express');
const { json } = require('express/lib/response');
const app = express()
const PORT = process.env.PORT || 8080;

//middlewares
// app.use(json)

//sequelize connection
const db = require('./app/models/')
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

//requests
app.get("/page",(req, res) => {
    res.send("this is a page")
})


//running server
app.listen(PORT,() => {
    console.log(`Server has successfully started on ${PORT}`);
})

