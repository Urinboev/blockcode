import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'

function CustomRoutes() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/posts" element={<Home />} />
        </Routes>
    )
}

export default CustomRoutes