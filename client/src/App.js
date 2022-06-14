import React, { useEffect } from "react"
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import UserRegister from './components/UserRegister';
import UserLogin from './components/UserLogin';
import UserProfile from './components/UserProfile';
import PrivateRoute from './components/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from "./JS/actions/userAction";

function App() {

  const isAuth = useSelector(state => state.userReducer.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfile())
  }, [isAuth])


  return (
    <div className="App">
      <NavBar />

      <div className="auth-wrapper">
        <Routes>
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/profile" element={<PrivateRoute component={UserProfile} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
