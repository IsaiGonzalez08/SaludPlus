import logoClinica from '../assets/img/logo-about.png'

export const Contactanos = () => {
    return(
        <div className="w-full h-screen bg-[#D4E3FC] mt-52">
            <div className="flex flex-row justify-center pt-5">
                <img className='w-24' src={logoClinica}/>
            </div>
            <div className="flex flex-row justify-center pt-12">
                <h2 className='text-[#9596D2] text-2xl font-bold'>Haciendo que la experiencia del cuidado de la salud sea más que un ser humano</h2>
            </div>
            <div className="flex flex-row justify-center pt-16">
                <div className="w-[500px] pr-10 text-justify">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio, 
                        aliquam adipisci amet possimus, libero laudantium sunt, quod ipsam exercitationem
                        repudiandae consequuntur. Rem nemo aliquid sequi autem ullam officiis quas. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus labore, 
                        corporis ut quo fuga nulla laboriosam eius cumque officiis eveniet sit excepturi 
                        commodi iure minima facilis perspiciatis harum assumenda. Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Perferendis optio, aliquam adipisci amet possimus, libero 
                        laudantium sunt, quod ipsam exercitationem repudiandae consequuntur. Rem nemo aliquid 
                        sequi autem ullam officiis quas.
                    </h2>
                </div>
                <div className="w-[500px] pl-10 text-justify">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio, 
                        aliquam adipisci amet possimus, libero laudantium sunt, quod ipsam exercitationem
                        repudiandae consequuntur. Rem nemo aliquid sequi autem ullam officiis quas. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus labore, 
                        corporis ut quo fuga nulla laboriosam eius cumque officiis eveniet sit excepturi 
                        commodi iure minima facilis perspiciatis harum assumenda. Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Perferendis optio, aliquam adipisci amet possimus, libero 
                        laudantium sunt, quod ipsam exercitationem repudiandae consequuntur. Rem nemo aliquid 
                        sequi autem ullam officiis quas.
                    </h2>
                </div>
            </div>
            <div className="flex flex-row justify-center pt-16">
                <div className="bg-[#0D6EFD] w-64 h-64 rounded-2xl"></div>
                <div className="bg-[#36CFBB] w-64 h-64 rounded-2xl ml-20 mr-20"></div>
                <div className="bg-[#1A2130] w-64 h-64 rounded-2xl"></div>
            </div>
        </div>
    )
}