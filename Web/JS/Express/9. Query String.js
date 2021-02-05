var express = require('express');
var app = express();
app.locals.pretty = true;       //
app.set('view engine', 'jade');        // view engine => Template ejngine, use jade
app.set('views', '../views');        // views, Path
const port = 3000;
app.use(express.static('../public'));          //Important (Static use 'public' folder)

app.get('/topic', function(req, res){

var topics = [
    'Javascript is...',
    'Nodejs is...',
    'Express is...'
];

var output = `
<a href="/topic?id=0">JavaScript</a><br>
<a href="/topic?id=1">Nodejs</a><br>
<a href="/topic?id=2">Express</a><br>
${topics[req.query.id]}
`
res.send(output);
})

app.get('/template', function(req, res){
    res.render('temp', {time:Date(), _title:'Jade'});                       //Template send
})                                                  //http://localhost:3000/template


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

})                      //http://localhost:3000/dynamic

app.get('/download', function (req, res) {
    res.send('Hello Router, <img src="/download.jpg">')
})                             //http://localhost:3000/download

app.get('/login', function (req, res) {
    res.send('<h1>Login please</h1>');
});                           //http://localhost:3000/login

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});