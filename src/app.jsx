import { useEffect, useState, useContext, createContext } from "react"
import { EjercicioComponent } from './components/sesiones'
import { sesiones, findSesion} from './controllers/sesiones'
import { DetalleSesion } from './components/detalleSesion'
import './app.css'

export function App() {

    const [Ejercicios, setEjercicios] = useState([])
    useEffect(() => {
        setEjercicios(sesiones)
        console.log(Ejercicios);
    },[])
    
    // const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
    // useEffect(() => {
    //     fetch('https://randomuser.me/api?results=100')
    //       .then(async res => await res.json())
    //       .then(res => {
    //         setEjercicios(res.results)

    //       })
    //       .catch(err => {
    //         console.error(err)
    //       })
    //   }, [])

        return(
            <>
            <div className="App">
                <h1>Ejercicios</h1>
                <EjercicioComponent ejercicios={Ejercicios} />
                <DetalleSesion sesionId={1}/>                                  
            </div>
            </>
        )
} 