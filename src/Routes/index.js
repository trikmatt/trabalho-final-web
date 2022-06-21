import {BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom'
import App from '../App'
import Carrinho from '../pages/Carrinho'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/carrinho' element={<Carrinho/>}/>
            <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router