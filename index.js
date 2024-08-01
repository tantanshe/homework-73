const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const password = "password"

const app = express();
const port = 8000;

app.get('/:echo', (req, res) => {
    const echo = req.params.echo;
    return res.send(echo);
})

app.get('/encode/:text', (req, res) => {
    const text = req.params.text;
    const encodedText = Vigenere.Cipher(password).crypt(text);
    return res.send(encodedText);
})

app.get('/decode/:text', (req, res) => {
    const text = req.params.text;
    const decodedText = Vigenere.Decipher(password).crypt(text);
    return res.send(decodedText);
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})