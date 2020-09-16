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

app.post("/new", bodyParser.json(), (req, res) => {

    let id = generateId();
    let title = req.body.title;
    let description = req.body.description;

    posts.push({id, title, description});
    
    res.send("Post adicionado");
});

function generateId() {
    return Math.random().toString(36).substr(2,9);
}

app.listen(PORT, () => {
    console.log("Servidor rodando na porta ", PORT);
});