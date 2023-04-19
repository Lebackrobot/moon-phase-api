import express from 'express'
import noAuthRoutes from './routes/noauth/index.js'

const app = express() 
const port = process.env.PORT || 4000

app.use(express.json())
app.use('/noauth', noAuthRoutes)

app.listen(port, () => {
    console.log(`server listening on port ${ port } 🌖🌗🌘🌑🌒🌓🌔`)
})