import express from 'express';
import 'dotenv/config'



const app = express()
const port = process.env.PORT || 3000;

app.get('',(req,res)=>{
    res.send('hola pibe')
})

app.listen(port, ()=>{
    console.log(`El servidor esta iniciado en ${port}`);
})