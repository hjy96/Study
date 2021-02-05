var express = require('express');       // use express
var app = express();
const port = 3000;
app.use(express.static('../public'));         //Important & Path

app.get('/', function (req, res) {
    res.send('Hello home page!')
});                            //http://localhost:3000/

app.get('/dynamic', function (req, res) {
    var lis ='';
    for(var i=0; i<5; i++){
        lis = lis + '<li>coding</li>';
    }
    var time = Date();
    var output = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title></title>
        </head>
        <body>
            Hello, Dynamic!
            <ul>
            ${lis}
            </ul>
            ${time}
        </body>
    </html>`;
    res.send(output);
})                              //http://localhost:3000/danymic

app.get('/download', function (req, res) {
    res.send('Hello Router, <img src="/download.jpg">')
})                                                      //http://localhost:3000/download


app.get('/login', function (req, res) {
    res.send('<h1>Login please</h1>');
});                           //http://localhost:3000/login

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});