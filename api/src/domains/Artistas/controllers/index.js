const router = require('express').Router();
const Artista = require('../models/Artista');
const ArtistaService = require('../services/ArtistaServices');

router.post('/criar', async(req, res) =>{
    const body = req.body;
    try{
        await ArtistaService.criar(body);
        return res.status(201).json('Artista criado com sucesso!');
    }catch{
        return res.status(400);
    }
})

module.exports = router;