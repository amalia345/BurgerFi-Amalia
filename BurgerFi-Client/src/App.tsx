
import Login from './components/Login/Login'
import Menu from './components/Menu/Menu'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

  function App() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/menu" element={<Menu />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </Router>
    );
  }
  

export default App
