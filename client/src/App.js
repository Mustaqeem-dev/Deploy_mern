import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './routes/Home/index';
import Login from './routes/Auth/Login/index';
import ProtectedRoute from './components/ProtectedRoute';
import SignUp from './routes/Auth/signUp/index';
import ForgetPassword from './routes/Auth/ForgetPassword/index';
import SetPassword from './routes/Auth/setPassword/index';
import JobFeed from './routes/jobFeed/JobFeed';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/setNewPassword/:id" element={<SetPassword />} />
        <Route path="/jobFeed" element={<ProtectedRoute><JobFeed /></ProtectedRoute>} />
       
       
      </Routes>
    </Router>
  );
};

export default App;
