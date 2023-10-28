import logo from '../assets/img/logo-clinica.png'

export const Header = () => {

    return(
        <header className="w-full h-24 flex flex-row bg-[#D4E3FC] justify-between">
            <div className="flex flex-row items-center pl-4">
                <img className='w-32' src={logo}/>
                <a className='pl-8' href="">Doctores</a>
                <a className='pl-4' href="">Acerca de nosotros</a>
                <a className='pl-4' href="">Contactanos</a>
            </div>
            <div className='flex flex-row items-center pr-10'> 
                <div className="flex flex-row items-center">
                    <div className="pr-5">
                        <button className='text-[#0d6EFD]'>¿Eres un administrador?</button>
                    </div>
                    <div className="">
                        <button className='bg-[#0D6EFD] text-white w-36 h-10 rounded-xl'>Inicio de sesión</button>
                    </div>
                </div>
            </div>
        </header>
    )
}