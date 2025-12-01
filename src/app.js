const app = require("express")();
app.get("/test", (_req, res)=> {
res.status(200).send("test response data")
})

module.exports = app;