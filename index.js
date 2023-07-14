const express = require("express");

// setup info
const app = express();
const port = 80;

// setup the website paths
app.get("/", async (req, response) => {
  response.sendFile("index.html", {
		root: "."
   });
})

app.get("/crashary.webp", async (req, response) => {
  response.sendFile("assets/images/Crashary.webp", {
		root: "."
   });
})

app.get("/crashary2.png", async (req, response) => {
  response.sendFile("assets/images/Crashary2.png", {
		root: "."
   });
})

// share our files to the website
app.use(express.static('./assets/images'));

// publish our latest website changes and make the website go online
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));