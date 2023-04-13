const router = require('express').Router();
const ArtistaServices = require('../services/ArtistaServices');


//Adiciona um artista ao banco de dados
router.post('/criar', async(req, res, next) =>{
    const body = req.body;
    try{
        await ArtistaServices.criar(body);
        res.status(201).json('Artista criado com sucesso!');
    }catch{
        next(erro);
    }
});

//Lista todas as músicas de um artista pelo nome do artista
router.get("/listarArtista", async(req, res, next) => {
    const _id = req.body.id;
    try {
        const musicas = await ArtistaServices.listarArtista(_id);
        res.status(200).json(musicas);
    }catch(erro){
        next(erro);
    }
});

//Atualiza as informações de um artista no banco de dados
router.put("/atualizar", async(req, res, next) => {
    const body = req.body;
    try{
        await ArtistaServices.atualizar(body);
        res.status(200).json("Artista atualizado");
    }catch(erro){
        next(erro);
    }
});

//Remove um artista e todas as músicas dele do banco de dados
router.delete("/remover", async(req, res, next) => {
    const id = req.body.id;
    try{
        await ArtistaServices.remover(id);
        res.status(200).json("Artista removido");
    }catch(erro){
        next(erro);
    }
})

module.exports = router;