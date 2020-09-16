const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

let posts = [
    {
    id: "laknscik",
    title: "Teste do Mural de Avisos",
    description: "Descrição do teste"
    },
];

app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts));
});
app.post("/new", (req, res) => {});

app.listen(PORT, () => {
    console.log("Servidor rodando na porta ", PORT);
});