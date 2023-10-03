const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// const morgan = require("morgan");
const path = require("path");
const config = require("./config/serverConfig");

const connectToDatabase = require("./utils/database");

// Configure body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configure CORS middleware
app.use(cors());

// Configure Morgan middleware for logging
// app.use(morgan("dev"));

connectToDatabase();

const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

const PORT = config.server.port;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
