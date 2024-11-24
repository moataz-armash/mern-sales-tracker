require("dotenv").config();

const express = require("express");
const cors = require("cors");
const salesRoutes = require("./routes/salesRoutes");

const app = express();

const corsOptions = {
  origin: [
    "https://mern-sales-tracker.onrender.com/api/sales",
    "https://mern-sales-tracker-n2ucapzzb-moatazarmashs-projects.vercel.app",
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // If cookies are used
};

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/sales", salesRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
