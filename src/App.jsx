import { useState } from 'react'
import './App.css';
// import Dashboard from './routes/dashboard/Dashboard';
// import Login from './routes/login/Login';
import { lazy, Suspense } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
const Dashboard = lazy(() => import('./routes/dashboard/Dashboard'));
const Login = lazy(() => import('./routes/login/Login'));

import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
   <BrowserRouter>
      <Suspense fallback={<ClipLoader color={"#5932EA"} loading={true} size={50} />}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Suspense>

   </BrowserRouter>
  )
}

export default App
