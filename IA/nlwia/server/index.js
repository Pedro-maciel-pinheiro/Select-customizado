import cors from 'cors'
import express, { response } from 'express'

const app = express()
app.use(cors())

app.get('/summary' , (request,response) => {
    response.send('Vai se fude titan!')
})

app.listen(3333,() => console.log('server is running on port 3333'))