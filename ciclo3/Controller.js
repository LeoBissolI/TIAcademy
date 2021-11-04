const express = require('express');
const cors = require('cors');
const models = require('./models');

const app =express();
app.use(cors());
app.use(express.json());



let cliente = models.cliente
let itempedido = models.itempedido
let pedido = models.pedido
let servico = models.servico

app.get('/', function(req, res){
    res.send('Ola Mundos!')
})

app.post('/servicos', async(req, res)=>{

await servico.create(
req.body
).then (function(){
    return res.json({
        error: false,
        message: "Serviço foi criado com sucesso!"
    })
}).catch(function(erro){
    return res.status(400).json({
        error: true,
        message: "Problema de conexão detectado... " 
        })
    });
});
// Criar um novo cliente [- POST -]

app.post('/cliente', async(req,res)=>{
    await cliente.create(
        req.body
    ).then(cli =>{
        return res.json({
            error:false, 
            message: "Cliente criado com sucesso!!",
            cli

        });
    }).catch(erro=>{
        return res.status(400).json({
            erro:true,
            message: 'erro detectado'
        });
        });
    });



app.post('/cliente/:id/pedidos', async(req, res) => {
    const ped = {ClienteId: req.params.id,
                data: req.body.data
            };

                if(!await cliente.findByPk(req.params.id)){
                    return res.status(400).json({
                        error:true,
                        message: "Cliente nao existe."
                    });
                };
                await pedido.create(ped)
                .then(order => {
                    return res.json({
                        error:false,
                        message:"pedido foi inserido com sucesso"
                    })
                }).catch(erro =>{
                    return res.json({
                        error: true,
                        message:"nao foi possivel inserir o pedido"
                    })
                })
            })


let port=process.env.PORT || 3001;

app.listen(port,(req,res)=> {
    console.log('Servidor Ativo: http://localhost:3001');
})

//USE  " npx nodemon Controller.js " para iniciar o Controller 