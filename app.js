const express= require ('express')
const app= express ()
const port= 3000
const bal= "25000"
const dep= "15000"

app.get('/',(req, res) =>{
 res.send('Hello World!')

})
app.get('/balance', (req, res) => {
    res.send(`balance: $${bal}`)

})

app.get('/deposit', (req, res) => {
    res.send(`Deposit: $${dep}`)

})

app.listen(port,()=>{
 console.log ('Bitcoin Server')

}) 

