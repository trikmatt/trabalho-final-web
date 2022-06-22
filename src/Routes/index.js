import {BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login'
import Carrinho from '../pages/Carrinho'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'

const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/carrinho' element={<Carrinho/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        <Footer/>   
        </BrowserRouter>
    )
}

export default Router