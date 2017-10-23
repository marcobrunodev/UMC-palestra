const http = require('http')
const ip = 'localhost' // 127.0.0.1 - 0.0.0.0
const port = 3000

http.createServer((req, res) => {
  const html = []

  html['/'] = 'Pagina da home'
  html['/fotos'] = 'Pagina das fotos'
  html['/contato'] = 'Pagina de contato'

  res.end(html[req.url] || '404')
}).listen(port, ip)
