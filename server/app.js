require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const connectDB = require('./db/connect');


// routers
const authRouter = require('./routes/auth');

//routes
app.use('/api/v1/auth',  authRouter)


app.use(express.json());
// extra packages



const port = process.env.PORT || 5000;

const start = async () => {
  try {
    // await connectDB(process.env.MONGODB_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
