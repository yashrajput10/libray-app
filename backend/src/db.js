const mongoose = require("mongoose");

const connectDb = async () => {
  const dbUri = process.env.DB_URI;
  if (!dbUri) {
    throw new Error("DATABASE_URL is not defined in .env file");
  }
  await mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
};

module.exports = { connectDb };
