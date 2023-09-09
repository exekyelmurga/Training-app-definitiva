import { findSesion } from '../../models/sesiones'

export let DetalleSesion = function ({sesionId}) {
    
    let sesion = findSesion({sesionId})
    
    return (
        <table width = '100%' border= '1'>
            <thead>
            <tr>
                <th>DIA DE: {sesion.name}</th>
                <th>ejercicio</th>
                <th>peso</th>
                <th>repeticiones</th>
                <th>rir</th>
            </tr>
            </thead>
            <tbody>
                {
                    sesion?.ejercicio.map((ejercicio) => {
                        return (
                            <tr key= {ejercicio.key}>
                            <td>&nbsp;</td>
                            <td>{ejercicio.name}</td>
                            <td>{ejercicio.peso}</td>
                            <td>{ejercicio.repeticiones}</td>
                            <td>{ejercicio.rir}</td>
                            </tr>
                            )
                    })
                }
            </tbody>
        </table>
    )
}