import React,{Navigate} from 'react';
import Home from './home/Home';
import {Route, Routes} from 'react-router-dom';
import Courses from './course/Courses';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser,setAuthUser]= useAuth();
    console.log(authUser);
  return (
    <>
    <div>
      <Routes className="dark:bg-slate-900 dark:text-white" >
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses />:<Signup />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
      <Toaster />
    </div>
    </>
  )
}

export default App
