const express = require("express");

const app = express();
const port = 3000;

app.get("/", (_, res) => res.send("Servidor em pé!"));

app.listen(port, () => {
    console.log(`Executando em http://localhost:${port}`);
});
