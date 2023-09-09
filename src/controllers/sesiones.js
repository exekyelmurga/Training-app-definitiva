import { getAll } from "../models/sesiones.js"

export class SesionController {

    static async getAll (req, res) {
        let sesiones = await getAll()
        res.json(sesiones)
    }
}