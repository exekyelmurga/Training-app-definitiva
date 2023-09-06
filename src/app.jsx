import { useEffect, useState, useContext, createContext } from "react"
import { EjercicioComponent } from './components/ejercicios'
import './app.css'

export function App() {
    
    const [Ejercicios, setEjercicios] = useState([])
    
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
    useEffect(() => {
        fetch('https://randomuser.me/api?results=100')
          .then(async res => await res.json())
          .then(res => {
            setEjercicios(res.results)

          })
          .catch(err => {
            console.error(err)
          })
      }, [])

        return(
            <>
            <div className="App">
                <h1>Ejercicios</h1>
                <EjercicioComponent ejercicios={Ejercicios} />
                    {/* {
                        Ejercicios.map(ejercicio => {
                            return(
                                <table>
                                    <thead key={ejercicio.email}>
                                        <tr>
                                        <th>email</th>
                                        <th>primer nombre</th>
                                        <th>apellido</th>
                                        

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th>{ejercicio.email}</th>
                                        <th>{ejercicio.name.first}</th>
                                        <th>{ejercicio.second}</th>
                                        </tr>
                                    </tbody>
                                </table>
                                )
                            })
                        } */}
            </div>
            </>
        )
} 