const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
});                            //http://localhost:3000/
app.get('/login', function (req, res) {
    res.send('<h1>Login please</h1>');
});                           //http://localhost:3000/login

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});