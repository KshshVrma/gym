import React from 'react'
import './App.css';
import{Route,Routes}from 'react-router-dom';
import{Box}from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
const App = () => {
  return (
   <Box width="400px" sx={{width:{x1:'1480px'}}}m="auto">
   <Navbar></Navbar>
    <Routes>
<Route path="/" element={<Home></Home>}></Route>
<Route path=".exercise/:id" element={<ExerciseDetail/>}></Route>
hello
    </Routes>
    <Footer></Footer>
   </Box>
  )
}

export default App