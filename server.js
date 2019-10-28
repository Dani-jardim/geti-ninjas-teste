const express = require('express')
const server = express()
const bodyParser = require('body-parser')
server.use(bodyParser.urlencoded({extended:false}))
server.use(bodyParser.json())

//lendo arquivo json
var fs = require('fs');
var content = fs.readFileSync('fiels.json', 'utf8');
console.log(content);

//rotas de html
// server.get('/', (req, res) => {
//     res.sendFile(__dirname + '/json/fiels.json');
// });


//rotas de html
server.get('/',(req,res) =>{
    res.sendFile(__dirname + '/html/index.html');
});
//rota de css
server.get('/html/css/form.css', function(req, res){
    res.sendFile(__dirname + '/html/css/form.css');
});

//rota de js
server.get('/json/fiels.js', function (req, res) {
    res.sendFile(__dirname + '/json/fiels.js');
});

//rota de jss
server.get('/js/popula-tabela.js', function (req, res) {
    res.sendFile(__dirname + '/js/popula-tabela.js');
});



//caminho do servidor
server.listen(3001, 'localhost', ()=>{
    console.log('servidor em : http://localhost:3001')
    console.log('para parar :ctrl+c')
})
