const express = require('express'),
    server = express(),
    cors = require('cors'),
    mysql = require('mysql');

    const database = mysql.createConnection({
        "host": "localhost",
        "user": "root",
        "password": "",
        "database": "fseletro"
    })
    
    server.use(cors())
    server.use(express.json())
    
    server.get('/' , (req,res) =>{
        res.end("<html> hello word</html>")
    })
    
    server.get('/produtos' , (req,res) => {
        const sql = "SELECT * FROM produto";
            database.query(sql, (error, results)=> {
                if(error){
                    return error
                }res.json(results)
            })
    })
    
    server.get('/comentario' , (req,res) => {
        const sql = "SELECT * FROM comentario";
            database.query(sql, (error, results)=> {
                if(error){
                    return error
                }res.json(results)
            })
    })
    
    server.post('/comentario' , (req, res) => {
        const {nome,msg} = req.body
        const sql = `INSERT INTO comentario (nome, msg) VALUES ('${nome}', '${msg}')`
        database.query(sql , (error, results) =>{
            if(error){
                return error;
            } res.json(results);
        })
    })

    server.get('/pedidos', (req, res) => {
        const sql = "SELECT * FROM pedidos";
        database.query(sql, (error, results) => {
            if(error) {
                return error;
            } res.json(results)
        })  
    })
    
    server.post('/pedidos', (req, res) =>{
        const { nomeCliente, endereco,telefone,nomeProduto,valorUnitario,quantidade,valorTotal} = req.body
        const sql = `INSERT INTO pedidos(nomeCliente,endereco,telefone,nomeProduto, valorUnitario,quantidade, valorTotal) VALUES ('${nomeCliente}', '${endereco}','${telefone}','${nomeProduto}','${valorUnitario}','${qunatidade}','${valorTotal}')`;
        database.query(sql, (error, results) =>{
            if(error){
                return error;
            } res.json(results);
        })
    })



server.listen(8080, ()=>{
    console.log("Server on")
})