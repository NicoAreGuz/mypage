var http = require("http");
const port = 5500;
const path = require ("path");

http.createServer(function(req, res) {
    console.log(req);
    res.sendFile(path.join(__mypage,'index.html'));
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`);
}); 