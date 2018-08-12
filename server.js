const express = require('express')
const path = require('path')
const app = express()

app.use(
  '/static/js',
  express.static(path.join(__dirname, 'build', 'static', 'js'))
)

app.use(
  '/audio/marimba',
  express.static(path.join(__dirname, 'build', 'audio', 'marimba'))
)

app.get('/', (req, res) => {
  const options = {
    root: __dirname + '/build/'
  }
  res.sendFile('index.html', options)
})

app.listen(8080, () => console.log('Listening'))
