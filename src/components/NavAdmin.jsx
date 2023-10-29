import { useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo-clinica.png'

export const NavAdmin = () => {

    const navigate = useNavigate();

    const handleLogOut = () => {
        navigate('/')
    }

    const handleDoctors = () => {
        navigate('/VistaAdmin')
    }

    const handleCitas = () => {
        navigate('/VistaAdminCitas')
    }

    return (
        <div className="flex flex-col items-center w-60 bg-[#D4E3FC] h-screen pt-10">
            <img className='w-44 h-24' src={logo} />
            <div className="flex flex-col gap-20 pt-28">
                <a className='text-2xl text-center font-semibold text-[#004AAD] cursor-pointer' onClick={handleDoctors}>Doctores</a>
                <a className='text-2xl text-center font-semibold text-[#004AAD] cursor-pointer' onClick={handleCitas}>Citas</a>
            </div>
            <div className="mt-[50vh]">
                <button className='bg-[#d83848] text-[#FFFFFF] 
                        w-32 h-10 rounded-md text-lg font-semibold' onClick={handleLogOut}>Cerrar sesión</button>
            </div>
        </div>
    )
}