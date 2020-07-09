const express = require("express");
const bodyParser = require("body-parser");

const PersonRoutes = require("./routes/person");
const FamilyRoutes = require("./routes/family");
const PowerRoutes = require("./routes/power");
const UnbalancedRoutes = require("./routes/unbalanced");
const PowerBalanceRoutes = require("./routes/powerbalance");
const ReadMeRoutes = require("./routes/readme")

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/person", PersonRoutes);
app.use("/family",FamilyRoutes);
app.use("/power",PowerRoutes);
app.use("/unbalanced",UnbalancedRoutes);
app.use("/powerbalance",PowerBalanceRoutes);
app.use("/readme",ReadMeRoutes);


app.listen(3000);