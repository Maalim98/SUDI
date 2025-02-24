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
import ScrollToTop from './components/ScrollToTop'
import Vision from './pages/Vision'
import Mission from './pages/Mission'
import FocusAreas from './pages/FocusAreas'
import CoreValues from './pages/CoreValues'
import './App.css'

function App() {
  return (
    <>
      <ScrollToTop />
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
          <Route path="/vision" element={<Vision />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/focus-areas" element={<FocusAreas />} />
          <Route path="/core-values" element={<CoreValues />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
