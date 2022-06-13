import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import UserRegister from './components/UserRegister';
import UserLogin from './components/UserLogin';

function App() {
  return (
    <div className="App">
     <NavBar />

     <div className="auth-wrapper">
        <Routes>
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
