const express = require('express')
const bp = require('body-parser');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

class AUTH_DB {
    constructor() {
        this.AUTH_DATA = require('./files/auth_props.json');
        this.LOGIN_KEYS = Object.keys(this.AUTH_DATA);
        
    }
}
const SAVED_AUTH = new AUTH_DB();
console.log(SAVED_AUTH.LOGIN_KEYS)

app.post('/search', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    console.log(req.body);
    res.send('working');
})

app.listen(PORT, () => {
    console.log(`Server is started. PORT: ${PORT}`)
})