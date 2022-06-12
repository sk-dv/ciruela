import path from 'path'
import parser from 'body-parser'
import express from 'express'
import { config } from 'process'
import { fileURLToPath } from 'url'

config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

const app = express()
const port = process.env.PORT || 8585

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

app.get('/privacy-policy', (_, res) => {
    res.sendFile(path.join(__dirname, '/privacy-policy.html'))
})

app.get('/auth', (req, res) => {
    console.log(`request => ${req}`)
    console.log(`response => ${res}`)
})

app.get('/auth/callback', (req, res) => {
    console.log(`request => ${req}`)
    console.log(`response => ${res}`)
})

app.listen(port)
console.log('Servidor escuchando en puerto: ' + port)