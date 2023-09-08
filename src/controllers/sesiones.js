export let sesiones =
[{name: 'pierna 1', key: 1, ejercicio:[{key: 0,name: 'sentadilla', peso: 0, repeticiones: 0, rir: 0}, {key: 1, name: 'extenciones de cuadriceps', peso: 0, repeticiones: 0, rir: 0}]},
{name: 'pierna 2',key: 2}, 
{name: 'espalda 1', key: 3}, 
{name: 'espalda 2', key: 4},
{name: 'pecho', key: 5}, 
{name: 'pantorrilas', key: 6}
]

export let findSesion =  function({sesionId}) {
    let sesion = []
    for (let i = 0; i < sesiones.length; i++) {
        if(sesiones[i].key === sesionId) sesion = sesiones[i]
    }
    return sesion
}