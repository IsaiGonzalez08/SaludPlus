import { useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo-clinica.png'

export const HeaderUsuario = () => {

    const navigate = useNavigate()

    const handleNavigateLanding = () =>{
        navigate('/')
    }

    return(
        <>
            <header className="w-full h-24 flex flex-row bg-[#D4E3FC] justify-between">
                <div className="flex flex-row items-center pl-8">
                    <img className='w-32' src={logo}/>
                </div>
                <div className="flex flex-row items-center pr-8">
                    <button className='bg-[#d83848] text-[#FFFFFF] w-32 h-10 rounded-md text-lg' onClick={handleNavigateLanding}>Cerrar sesión</button>
                </div>
            </header>
        </>
    )
}