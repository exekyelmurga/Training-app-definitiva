import express, { json } from 'express'
import { sesionesRouter } from './src/routes/sesiones.js'
import { corsMiddleware } from './src/middelwares/cors.js'

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.use('/sesiones', sesionesRouter)

const PORT = process.env.PORT ?? 3001

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
