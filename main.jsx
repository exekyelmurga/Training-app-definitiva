import { createRoot } from 'react-dom/client'
import { App } from './src/views/home'
const root = createRoot(document.getElementById('app'))

root.render(<App/>)