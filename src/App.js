import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Singlepst from './components/singlepost/Singlepost';
import { useContext, useEffect, useState } from 'react';
import { AuthContext, AuthProvider } from './AuthContext';


function App() {
  const {user, login} = useContext(AuthContext)
   
  useEffect(()=> {
      if (localStorage.getItem("token")){
       login(); 
      } 
   },[])

  return (
    <Router>
    <TopBar />
    <Routes>
      <Route path="/" exact element={<Home></Home>}></Route> 
      <Route path="/register" element={user ? <Home/> : <Register />} ></Route>
      <Route path="/login" element={user ? <Home/> : <Login />} ></Route>
      <Route path="/write" element={user ? <Write /> : <Login />} ></Route>
      <Route path="/settings" element={user ? <Settings /> : <Login/>} ></Route>
      <Route path="/Single/:id" element={user ? <Single /> : <Single/>} ></Route>
      <Route path="/post/:postId" element={<Single />} ></Route> 
    </Routes>
  </Router>

    
  );
}

export default App;
