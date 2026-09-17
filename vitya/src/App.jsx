import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ShelfScreen from './pages/ShelfScreen'
//import './App.css'

function App() {
  const [books, setBooks] = useState([])
  const [showOnlyUnread, setShowOnlyUnread] = useState(0)

  return (
      <div className="app">
  <div className="app-header">
    <div className="brand">
      <div className="brand-mark">S</div>
      <div className="brand-name">Shelf</div>
    </div>
  </div>
  <ShelfScreen books={books} setBooks={setBooks}/>
</div>

  )
}



export default App
