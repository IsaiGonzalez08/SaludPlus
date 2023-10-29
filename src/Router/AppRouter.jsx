import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from '../Views/LandingPage'
import { Login } from '../Views/Login'
import { LoginAdmin } from '../Views/LoginAdmin'
import { Registro } from '../Views/Registro'
import { AdminDoctores } from '../Views/AdmiDoctores'
import { VistaUsuario } from '../Views/VistaUsuario'
import { AdmiClientes } from '../Views/AdmiClientes'

export const AppRouter = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage/>}/>
                    <Route path='/Registro' element={<Registro/>}/>
                    <Route path='/LoginUser' element={<Login/>}/>
                    <Route path='/VistaUsuario' element={<VistaUsuario/>}/>
                    <Route path='/LoginAdmin' element={<LoginAdmin/>}/>
                    <Route path='/VistaAdmin' element={<AdminDoctores/>}/>
                    <Route path='/VistaAdminCitas' element={<AdmiClientes/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}