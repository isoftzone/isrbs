


const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const app = express();

// Route imports
const userRoutes = require("./routes/userRoute");
const apiRoutes = require("./routes/apiRoute");
const upload = require('./routes/upload');
const images = require('./routes/images');
const itemimage = require('./routes/itemimage');

require("./dbMaster");

// Middleware
app.use(express.json());
app.use(cookieParser());

// Error handling for uncaught exceptions and unhandled rejections
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection:", reason);
  process.exit(1);
});

const allowedOrigins = [
  'http://localhost:5173',
  'https://retail.yoappstor.com' // optional
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.options('*', cors());


// Logging middleware for uploads
app.use("/uploads", (req, res, next) => {
  console.log("Accessing upload:", req.url);
  next();
});

// Static file serving
app.use("/uploads", express.static("uploads"));
app.use("/public", express.static("public"));
app.use("/public/images/banner", express.static("public/images/banner"));
app.use("/images", express.static(path.join(__dirname, "public/images/")));
app.use("/itemimage", express.static(path.join(__dirname, "public/images/banner")));
app.use(express.static(path.join(__dirname, "public")));
app.use("/images/banner", express.static(path.join(__dirname, "public/images/banner")));

// Routes
app.use("/api/user", userRoutes);
app.use("/api/shiprocket", apiRoutes);
app.use(userRoutes)
app.use(upload);
app.use(images);
app.use(itemimage);

// Default and test routes
app.get("/", (req, res) => {
  res.send("ISRBS Backend server is running!");
});

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello from ISRBS backend!" });
});

// Start server
const port = process.env.PORT || 4000;
app.listen(port, "0.0.0.0", () => {
  console.log(`ISRBS Server running on port ${port}`);
});
