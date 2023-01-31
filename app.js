const http = require('http');

const server = http.createServer( (req, res) => {
    console.log("Server running on http://localhost:3000/");

    process.exit();
})
server.listen(3000)
