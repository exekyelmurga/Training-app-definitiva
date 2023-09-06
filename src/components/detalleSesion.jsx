import { findSesion } from '../controllers/sesiones'

export let DetalleSesion = function ({sesionId}) {
    
    let sesion = findSesion({sesionId})

    return (
        <h1>{sesion.name}</h1>
    )
}