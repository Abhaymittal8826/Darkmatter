const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error: ", err));

         
const authRoutes = require("./routes/authRoutes");
const votingRoutes = require("./routes/votingRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/vote", votingRoutes);

app.get("/", (req, res) => res.send("API is running"));

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
