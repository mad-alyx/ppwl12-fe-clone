import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
// Navbar diimpor jika ingin muncul di setiap halaman secara otomatis
// import Navbar from './components/Navbar'; 

function App() {
  return (
    <Router>
        {/* <Navbar /> */} {/* Buka komen ini jika ingin navbar muncul di semua page */}
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page-2" element={<Page2 />} />
        </Routes>
    </Router>
  );
}

export default App;