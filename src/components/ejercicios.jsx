
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
          ejercicios.map((user) => {
            return (
              <tr key={user.email}>
                <td>
                  <img src={user.picture.thumbnail} />
                </td>
                <td>
                  {user.name.first}
                </td>
                <td>
                {user.name.last}
                </td>
                <td>
                  {user.location.country}
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}