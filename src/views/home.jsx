import { useEffect, useState} from "react"
import { EjercicioComponent } from './components/sesiones'
import { DetalleSesion } from './components/detalleSesion'
import './home.css'


export function App() {    
    const [Ejercicios, setEjercicios] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3001/sesiones')
        .then(async res => await res.json())
        .then(res => {setEjercicios(res)})
        .catch(err => {console.error(err)})
    }
        ,[])

        return(
            <>
            <div className="App">
                <h1>Ejercicios</h1>
                <EjercicioComponent ejercicios={Ejercicios}/>
                <DetalleSesion sesionId={1}/>                                  
            </div>
            </>
        )
} 