const express = require("express");
const mongoose = require("mongoose");
const usuario = require("./models/usuario")

const app = express();

const user = "admin"
const password = "boticol"
const dbName = "rap-rumble"

const start = async () => {
  console.log("Ejecuta ejecuta")
  try {
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@orion.88flgmz.mongodb.net/${dbName}?retryWrites=true&w=majority`
    );
    app.listen(5000, () => console.log("Server started on port 5000 pero ya conectando siuuu"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();


const User = usuario;
User.createIndexes();

// For backend and express
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", async (req, resp) => {
  const data = await User.find({})
  resp.send(data);
  // You can check backend is working or not by 
  // entering http://loacalhost:5000
    
  // If you see App is working means
  // backend working properly
});

app.post("/register", async (req, resp) => {
  try {
      const user = new User(req.body);
      let result = await user.save();
      result = result.toObject();
      if (result) {
          delete result.password;
          resp.send(req.body);
          console.log(result);
      } else {
          console.log("User already register");
      }

  } catch (e) {
      resp.send("Something Went Wrong");
  }
});
