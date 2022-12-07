import React from 'react';
import { Navbar } from './Navbar';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Inicio } from './Inicio';
import { NuevoRestaurante } from './NuevoRestaurante';
import { BuscarRestaurante } from './BuscarRestaurante';
import { Footer } from './Footer';


export const Main = () => {
    return <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='inicio' element={<Inicio />} />
                <Route path='nuevo' element={<NuevoRestaurante />} />
                <Route path='buscar' element={<BuscarRestaurante />} />
                <Route path='*' element={<Navigate to='/inicio' />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
}

