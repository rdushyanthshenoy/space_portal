const express = require("express");
const bodyParser = require("body-parser");

const PersonRoutes = require("./routes/person");
const FamilyRoutes = require("./routes/family");
const PowerRoutes = require("./routes/power");
const UnbalancedRoutes = require("./routes/unbalanced");
const PowerBalanceRoutes = require("./routes/powerbalance");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/person", PersonRoutes);
app.use("/familyfromuniverse",FamilyRoutes);
app.use("/arewebalanced",PowerRoutes);
app.use("/unbalancedfamily",UnbalancedRoutes);
app.use("/balanceme",PowerBalanceRoutes);

app.listen(process.env.PORT || 5000);