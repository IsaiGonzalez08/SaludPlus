import doctor1 from '../assets/img/doctor-1.png'
import doctor2 from '../assets/img/doctor-2.png'
import doctor3 from '../assets/img/doctor-3.png'
import doctor4 from '../assets/img/doctor-4.png'
import doctor5 from '../assets/img/doctor-5.png'
import doctor6 from '../assets/img/doctor-6.png'
import doctor7 from '../assets/img/doctor-7.png'
import doctor8 from '../assets/img/doctor-8.png'


export const Doctores = () => {
    return(
        <div className="flex flex-col bg-backDoctors w-full h-screen pt-36">
            <div className="flex flex-col items-center">
                <div>
                    <h2 className="text-4xl">Conoce nuestras especialidades</h2>
                </div>
                <div className="flex flex-row pt-12 gap-5">
                    <div className="flex flex-col">
                        <div className="bg-[#F7F6F6] w-64 h-80 rounded-2xl pt-2">
                            <img src={doctor1}/>
                        </div>
                        <h2 className='text-center font-bold'>Genaro Cuesta</h2>
                        <h4 className='text-center'>Odontólogo</h4>
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-[#F7F6F6] w-64 h-80 rounded-2xl pt-2">
                            <img className='w-44 ml-10 mt-1' src={doctor2}/>
                        </div>
                        <h2 className='text-center font-bold'>María Robles</h2>
                        <h4 className='text-center'>Psicologa</h4>
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-[#F7F6F6] w-64 h-80 rounded-2xl pt-0">
                            <img className='h-80' src={doctor3}/>
                        </div>
                        <h2 className='text-center font-bold'>Genaro Cuesta</h2>
                        <h4 className='text-center'>Odontólogo</h4>
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-[#F7F6F6] w-64 h-80 rounded-2xl pt-5 pl-2">
                            <img className='h-[300px] w-60' src={doctor4}/>
                        </div>
                        <h2 className='text-center font-bold'>Genaro Cuesta</h2>
                        <h4 className='text-center'>Odontólogo</h4>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center">
            <div className="flex flex-row pt-12 gap-5">
                    <div className="flex flex-col">
                        <div className="bg-[#F7F6F6] w-64 h-80 rounded-2xl pt-8 pl-2">
                            <img className='h-72' src={doctor5}/>
                        </div>
                        <h2 className='text-center font-bold'>Genaro Cuesta</h2>
                        <h4 className='text-center'>Odontólogo</h4>
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-[#F7F6F6] w-64 h-80 rounded-2xl pl-4">
                            <img className='h-80' src={doctor6}/>
                        </div>
                        <h2 className='text-center font-bold'>María Robles</h2>
                        <h4 className='text-center'>Psicologa</h4>
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-[#F7F6F6] w-64 h-80 rounded-2xl pt-8 pl-10">
                            <img className='h-72' src={doctor7}/>
                        </div>
                        <h2 className='text-center font-bold'>Genaro Cuesta</h2>
                        <h4 className='text-center'>Odontólogo</h4>
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-[#F7F6F6] w-64 h-80 rounded-2xl pt-5 pl-2">
                            <img className='h-[300px] w-60' src={doctor8}/>
                        </div>
                        <h2 className='text-center font-bold'>Genaro Cuesta</h2>
                        <h4 className='text-center'>Odontólogo</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}