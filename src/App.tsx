import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Card } from './pages/Card/Card'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Card />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
