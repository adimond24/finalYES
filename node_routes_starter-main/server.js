require('dotenv').config()
require('express-async-errors')

const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json")
const app = express();

const connectDB = require('./connect');
const foodRouter = require('./routes/tasks')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
//middleware
app.use(express.json())


//routes
app.get('/', (req, res) =>{
  res.send('<h1>Pick Your Foods</h1><a href="/api/v1/food"> Food Route </a>')
});

app.use('/api/v1/food', foodRouter);

//products route
app.use(notFoundMiddleware)
app.use(errorMiddleware)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
const port = process.env.PORT || 3000

const start = async ()=>{
  try {
    //connectDB
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  } catch (error) {
    console.log(error);
  }
}

start()

