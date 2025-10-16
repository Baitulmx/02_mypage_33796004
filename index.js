//MyPage
var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>My Page Server</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #c6bbf3ff;
        p {
          font-size: 24px;
        }
        h1 {
          text-align: center;
          color: #6b6868ff;
        }
      </style>
    </head>
    <body>
      <h1>About me</h1>
      <p>My name is Soubhaan Aslam, third year student, haha im 6,3.</p>
    </body>
    </html>
  `);
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 
// To run this code, use the command: node index.js
// Test 3
