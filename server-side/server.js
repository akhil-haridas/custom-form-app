..const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const connectToDatabase = require("./utils/database");

// Configure body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configure CORS middleware
app.use(cors());

// Connect to the database
connectToDatabase();

// Import and use routes
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
