import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Agriculture from './pages/services/Agriculture'
import Nutrition from './pages/services/Nutrition'
import Vocational from './pages/services/Vocational'
import Environmental from './pages/services/Environmental'
import Water from './pages/services/Water'
import Youth from './pages/services/Youth'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services/agriculture" element={<Agriculture />} />
        <Route path="/services/nutrition" element={<Nutrition />} />
        <Route path="/services/vocational" element={<Vocational />} />
        <Route path="/services/environmental" element={<Environmental />} />
        <Route path="/services/water" element={<Water />} />
        <Route path="/services/youth" element={<Youth />} />
      </Route>
    </Routes>
  )
}

export default App
