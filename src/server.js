// importando dependencias do express
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// ligando o express ao server
const server = express();
server
//utilizar body no req
.use(express.urlencoded({extended: true}))
//usando arquivos estaticos
.use(express.static('public'))
//Configurando o template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')
// criar rotas
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

//ligando o server 
server.listen(5500)
