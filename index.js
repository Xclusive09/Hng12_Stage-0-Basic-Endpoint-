const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: "ibrahimabdulquddus51@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Xclusive09/Hng12_Stage-0-Basic-Endpoint-.git"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
