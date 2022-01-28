const express = require("express");
const db = require("./data/database");
const app = express();

app.get("/", (req, res) => {
    const query =
        "INSERT INTO games(name, cost, category) VALUES ('far cry', '125', 'Ação')";

    db.query(query, (err, result) => {
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("Rodando servidor");
});
