const express = require("express");
const router = express.Router();
const Musica = require("../models/Musica");
const listaDeMusicas = require("../models/Musica");

router.get("/Musicas", (req, res) => {
    res.status(200).send(listaDeMusicas);
});

router.get("/Musicas/Pesquisa", (req, res) => {
    const nome = req.query.nome;
    const filtro = Musica.filter(Musica => Musica.nome === nome);

    if(!filtro)
        res.status(404).json("Nenhuma música encontrada");
    else
        res.status(200).json(filtro);
});

module.exports = router;