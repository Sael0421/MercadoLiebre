const express = require('express');
const path = require ('path');
const app = express();
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando en el puerto 3000');
});

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname + '/src/views/home.html'));
});

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname + '/src/views/login.html'));
});

app.post('/login', (req,res)=>{
    res.redirect('/');
});

app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname + '/src/views/register.html'));
});
app.post('/register', (req,res)=>{  
    res.redirect('/');
});
