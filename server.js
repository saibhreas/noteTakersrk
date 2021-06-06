const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const app = express();
const PORT = procecss.env.PORT || 3000;

// sets up body parsing to route our middleware
app.use(express.json());
app.use(express.urlencoded({ extend: true }));

//user pages
app.use(express.static("public"));

//Router: api && html
app.use("/api", apiRoutes);
app.use("./", htmlRoutes);

app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));
