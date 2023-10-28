import back from '../assets/img/doctor-main.png'

export const Inicio = () => {
    return (
        <div className="flex justify-around w-full bg-[#D4E3FC]">
            <div className="flex flex-col justify-center">
                <div className="flex flex-row justify-center">
                    <h1 className="font-bold text-center text-4xl pb-14">Agenda una cita con los doctores <br /> 
                    mejores preparados
                    </h1>
                </div>
                <div className="flex flex-row text-justify w-[500px] ml-8">
                    <p className="text-justify pb-14 text-xl">
                        Sería fantástico que el médico tuviera la posibilidad 
                        de experimentar en sí mismo diversas medicinas. Comprendería
                        la acción de los medicamentos de un modo muy distinto.- 
                        Mijaíl Bulgákov.
                    </p>
                </div>
                
                <div className="flex flex-row justify-center">
                    <button className='bg-[#0D6EFD] text-white w-80 h-8 rounded-lg text-lg'>Agendar una cita</button>
                </div>
            </div>
            <div className="flex">
                <img className='w-[780px]' src={back}/>
            </div>
        </div>
    )
}