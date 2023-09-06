
export function EjercicioComponent ({ ejercicios }) {
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Foto</th>
          <th className='pointer' >Nombre</th>
          <th className='pointer' >Apellido</th>
          <th className='pointer'>País</th>
        </tr>
      </thead>

      <tbody >
        {
          ejercicios?.map((user) => {
            return (
              <tr key={user.key}>
                <td>
                  {user.name}
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}