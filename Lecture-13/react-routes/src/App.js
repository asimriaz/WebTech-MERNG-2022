import './App.css';

import {
  BrowserRouter as Router, Routes, Route, Link
} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div>
      <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
      </nav>
        <Routes>
          <Route  index element={<Home />}/>
          <Route  path='/about' element={<About />}/>
          <Route  path='/contact' element={<ContactUs />}/>
          <Route >
              <Route />
          </Route>
          <Route  path='*' element={<h4>Route not Founr 404</h4>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
