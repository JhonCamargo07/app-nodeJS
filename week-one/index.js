const handleServer = (req, res) => {
    res.writeHead(200, {"content-type": 'text-html'})
    res.write('<h1>Respuesta del servidor</h1>');
    res.end()
}
const http = require('http');
const server = http.createServer(handleServer).listen(5000);