const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();
mongoose.set("strictQuery", false);
mongoose.set("debug", true);

const { HOST_URI, PORT = 3000 } = process.env;

mongoose
  .connect(HOST_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.error("Error while connecting to mongodb", error.message);
    process.exit(1);
  });

