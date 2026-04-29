import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import PageExample from './pages/PageExample';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page-example" element={<PageExample />} />
        </Routes>
    </Router>
  );
}

export default App;