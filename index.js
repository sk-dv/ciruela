import path from 'path'
import parser from 'body-parser'
import express from 'express'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

const app = express()
const port = process.env.PORT || 8585

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

app.get('/privacy-policy', (_, res) => {
    res.sendFile(path.join(__dirname, '/privacy-policy.html'))
})

app.listen(port)
console.log('Servidor escuchando en puerto: ' + port)