import express from 'express';
import 'dotenv/config'



const app = express()
const port = process.env.PORT || 80;

app.get('',(req,res)=>{
    res.send('hola pibe desde aws')
})

app.listen(port, ()=>{
    console.log(`El servidor esta iniciado en ${port}`);
})