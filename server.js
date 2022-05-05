require('dotenv').config()
const express = require('express');
const { json } = require('express/lib/response');
const app = express()
const logger = require('morgan')
const PORT = process.env.PORT || 8080;

//importing routes
const ContactRouter = require('./app/routes/ContactRoute')
const EmailDeploymentRouter = require('./app/routes/EmailDeploymentRoute')


//middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/contacts",ContactRouter)
app.use("/emaildeployment",EmailDeploymentRouter)

//sequelize connection
const db = require('./app/models/')
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

//requests
// app.get("/page",(req, res) => {
//     res.send("this is a page")
// })

/** catch 404 and forward to error handler */
app.use('*', (req, res) => {
    return res.status(404).json({
        success: false,
        message: 'API endpoint doesnt exist'
    })
});


//running server
app.listen(PORT,() => {
    console.log(`Server has successfully started on ${PORT}`);
})

