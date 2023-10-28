import logo from '../assets/img/logo-clinica.png'

export const NavAdmin = () => {
    return (
        <div className="flex flex-col items-center w-60 bg-[#D4E3FC] h-screen pt-10">
            <img className='w-44 h-24' src={logo} />
            <div className="flex flex-col gap-20 pt-28">
                <a className='text-2xl text-center font-semibold text-[#004AAD]' href="">Doctores</a>
                <a className='text-2xl text-center font-semibold text-[#004AAD]' href="">Clientes</a>
            </div>
            <div className="mt-[50vh]">
                <button className='bg-[#d83848] text-[#FFFFFF] 
                        w-32 h-10 rounded-md text-lg font-semibold'>Cerrar sesión</button>
            </div>
        </div>
    )
}