import { useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo-clinica.png'

export const Header = () => {

    const navigate = useNavigate()

    const handleNavigateLogAdmi = () =>{
        navigate('/LoginAdmin')
    }

    const scrollToSectionDoctors = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
          const sectionPosition = section.getBoundingClientRect().top;
          const offsetPosition = sectionPosition + 100;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      };

    const handleDoctors = (event) => {
        event.preventDefault();
        scrollToSectionDoctors('#doctores');
    }

    const scrollToSectionNosotros = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
          const sectionPosition = section.getBoundingClientRect().top;
          const offsetPosition = sectionPosition + 10;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      };

    const handleNosotros = (event) => {
        event.preventDefault();
        scrollToSectionNosotros('#nosotros');
    }

    const handleNavigateLanding = () => {
        navigate('/')
    }

    const handleNavigateLogIn = () => {
        navigate('/LoginUser')
    }

    return(
        <header className="w-full h-24 flex flex-row bg-[#D4E3FC] justify-between">
            <div className="flex flex-row items-center pl-4">
                <a href="" onClick={handleNavigateLanding}><img className='w-32' src={logo}/></a> 
                <a className='pl-8 cursor-pointer' onClick={handleDoctors}>Doctores</a>
                <a className='pl-4 cursor-pointer' onClick={handleNosotros}>Acerca de nosotros</a>
                <a className='pl-4 cursor-pointer'>Contactanos</a>
            </div>
            <div className='flex flex-row items-center pr-10'> 
                <div className="flex flex-row items-center">
                    <div className="pr-5">
                        <button className='text-[#0d6EFD]' onClick={handleNavigateLogAdmi}>¿Eres un administrador?</button>
                    </div>
                    <div className="">
                        <button className='bg-[#0D6EFD] text-white w-36 h-10 rounded-xl' onClick={handleNavigateLogIn}>Inicio de sesión</button>
                    </div>
                </div>
            </div>
        </header>
    )
}