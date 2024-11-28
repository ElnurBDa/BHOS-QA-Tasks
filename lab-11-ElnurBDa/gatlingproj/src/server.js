const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const AuthController = require("./AuthController");

const app = express();
const upload = multer(); // For handling form-data
const authController = new AuthController();

app.use(bodyParser.json());

app.post("/register", upload.none(), async (req, res) => {
  const { email, password } = req.body;
  //console.log("email:", email);
  //console.log("password:", password);
  try {
    const user = await authController.register(email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
