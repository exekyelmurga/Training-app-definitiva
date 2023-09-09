import { Router } from 'express'
import { SesionController } from '../controllers/sesiones.js'

export const sesionesRouter = Router()

sesionesRouter.get('/', SesionController.getAll)