const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/words', (req, res) => {
    axios({
        method: 'get', 
        url:`https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=1000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=6&limit=40&api_key=${process.env.API_KEY}`,
        
    })
    .then(response => res.send(response.data))
    .catch(err => console.log(err))
});

module.exports = app;