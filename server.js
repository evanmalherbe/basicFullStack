const express = require("express");
const app = express();

app.get("/data", function (req, res) {
  res.send({ message: "Hello World!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
