console.log('Server is running...');

const express = require("express");
const app = express();

app.set("view engine", "ejs");
// make routes 
// can be get, post, put, delete, etc.
// paramters: (path, callback function)

// below can also be used to pass in param to ejs
app.use((req, res, next) => {
    res.locals.name = "KHOO";
    next();
})

app.get("/", (req, res) => {
    // res.send("Hello World!");
    // res.json({"message": "success"});

    // send status code and default error msg
    // res.sendStatus(500);

    // send status code and custom error msg (or json)
    // res.status(500).send("Something broke!");
    // or res.status(500).json({ error: "Something broke!" });

    // download file for user
    // res.download("server.js")

    res.render("index", { name: "my name is Slim Shady" });
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
