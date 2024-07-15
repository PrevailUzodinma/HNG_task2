const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authrouter = require("./routes/auth.router");
const router = require("./routes/index.router");
const syncModels = require("./config/sync");
const port = process.env.PORT || 4000;


const app = express();

// allow requests from any origin
app.use(cors({}));

// middleware to parse JSON bodies
app.use(express.json());

// middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// logger middleware: log endpoints called
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(cookieParser());

// use router
//app.use('/auth/', authrouter);
//app.use('/api/', router);


// start the server and listen
async function startServer() {
  try {
    await syncModels(); // Sync models with the database
    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();
