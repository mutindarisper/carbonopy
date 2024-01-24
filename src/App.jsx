import HomePage from "./components/HomePage"
import Stories from "./components/Stories";
import Careers from './components/Careers'
import './index.css'
import { Route, Routes } from 'react-router-dom';

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="/careers" element={ <Careers /> } />
    </Routes>
    
     
    </>
  )
}

export default App
