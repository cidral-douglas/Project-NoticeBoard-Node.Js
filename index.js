const express = require('express');
const bodyParser = require('body-parser');
const posts = require('./model/posts');

const PORT = 3000;
const app = express();

app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
});

app.post("/new", bodyParser.json(), (req, res) => {

    let title = req.body.title;
    let description = req.body.description;

   posts.newPost( title, description);
    
    res.send("Post adicionado");
});


app.listen(PORT, () => {
    console.log("Servidor rodando na porta ", PORT);
});