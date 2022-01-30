const express = require("express");
const db = require("./data/database");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    let SQL = "INSERT INTO games (name, cost, category) VALUES (?,?,?)";

    db.query(SQL, [name, cost, category], (err, result) => {
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("Rodando servidor");
});
