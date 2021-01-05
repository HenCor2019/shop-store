require('dotenv').config()

const http = require('http')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const productRouter = require('./Routes/Product.route')

const app = express()

const PORT = process.env.PORT || 5000

app.set('port', PORT)

var server = http.createServer(app)
server.listen(PORT)

server.on('error', (e) => {
  console.error(e)

})

server.on('listening', () => {
  console.log(`Listening on port ${PORT}`)

})

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Database connected')
  })
  .catch( err => {
    console.error("Error ha ocurrido")
  })

mongoose.set('useFindAndModify',false)

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true  }));
app.use(cookieParser());
app.use(express.json())
app.use('/products', productRouter)

app.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`)
});
