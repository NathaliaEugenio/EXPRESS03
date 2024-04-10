//instalar e executar uma query simples

const express=require('express');
const mysql=require('mysql2');

const app=express();

app.listen(3000,()=>{
    console.log("Servidor no ar")
}) 

//criação da conexão com o banco de dados

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user_bd_tasks',
    password: 'QL0P4TDcQBG2R97Djet7vXYHggatTZE4',
    database: 'nodejs_tasks'
})

//criamos a conexão com o banco de dados através do server

connection.connect(erro=>{
    if(erro){
        console.log('Erro na conexão ao MySQL'+erro.message);
        return
    }
    console.log('conexão estabelecida');
})

//criando uma rota que execute a query 

app.get('/',(req,res)=>{
    connection.query('SELECT * FROM tasks',(err,results,fields)=>{
        if(err){
            console.log(err.menssage);
            res.send("Erro ao obter a lista de tarefas");
        }
         else{
            res.send(results);
        }
    })
})