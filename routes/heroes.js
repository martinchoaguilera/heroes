const express= require('express');
const router= express.Router();
const heroes= require('../Controllers/heroesController');

//Rutas
router.get('/',heroes.todos);
router.get('/:id', heroes.id);
router.get('/:id/bio/:ok?', heroes.bio);

//Exportamos
module.exports= router;

// (/heroes/detalle/id)