const express = require('express')
const app = express()
const port = 3000

app.set('view engine',  'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/contatos', (req, res) => {
  res.render('contato')
})

app.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar a parada só dar um ctrl + c')
})
