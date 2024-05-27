import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar/Navbar';
import './index.css';
import PageContainer from './containers/PageContainer';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div className="w-10/12 m-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
