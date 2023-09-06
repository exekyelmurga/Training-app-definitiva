export let sesiones = [{name: 'pierna 1', key: 1}
, {name: 'pierna 2',key: 2}, {name: 'espalda 1', key: 3}, {name: 'espalda 2', key: 4},{name: 'pecho', key: 5}, {name: 'pantorrilas', key: 6}]

export let findSesion = function({sesionId}) {
    console.log(sesionId);
    let sesion = []
    for (let i = 0; i < sesiones.length; i++) {
        if(sesiones[i].key === sesionId) sesion = sesiones[i]
    }
    console.log(sesion);
    return sesion
}