import { HeaderUsuario } from "../components/HeaderUsuario"
import { useState } from "react";

export const VistaUsuario = () => {

    const [selectedButton, setSelectedButton] = useState(null);
    const [fechaCita, setFechaCita] = useState(getTodayDate());
    const [fechaNacimiento, setFechaNacimiento] = useState('');

    const handleButtonClick = (button) => {
        if (selectedButton === button) {
            // Si el botón seleccionado es el mismo que se hizo clic nuevamente, deselecciónalo.
            setSelectedButton(null);
          } else {
            // De lo contrario, selecciona el nuevo botón.
            setSelectedButton(button);
          }
    };

    function getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function getMaxDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
      }

    return (
        <>
            <HeaderUsuario></HeaderUsuario>
            <div className="w-full h-[90.3vh] bg-[#D4E3FC] flex flex-row justify-center scr">
                <div className="flex flex-col bg-[#F4F6FA] w-[56vh] h-[88vh] rounded-sm">
                    <div className="bg-[#B9C7E0] w-full h-16 flex flex-row justify-center items-center rounded-t-smx| border-b-[#919DB0] border-b-[5px]">
                        <h2 className="text-2xl font-bold text-white">Completa el siguiente formulario</h2>
                    </div>
                    <div className="overflow-y-scroll pb-10">
                        <h4 className="font-medium ml-9 mt-5">Clinica</h4>
                        <div className="flex flex-row justify-center pt-5">
                            <select className="w-[470px] h-14 font-light pl-2">
                                <option value="" disabled selected>Selecciona tú clinica</option>
                                <option value="">Tuxtla Gutierrez</option>
                            </select>
                        </div>
                        <h4 className="font-medium ml-9 mt-5">Selecciona tú fecha y hora</h4>
                        <div className="flex flex-row justify-center pt-5">
                            <input className="w-[470px] h-14 font-light pl-2" 
                                    type="date" 
                                    id="fechaCita"
                                    name="fechaCita"
                                    value={fechaCita}
                                    min={getTodayDate()}
                                    onChange={(e) => setFechaCita(e.target.value)}
                                    required/>
                        </div>
                        <div className="flex flex-row justify-center pt-5">
                            <select className="w-[470px] h-14 font-light pl-2">
                                <option value="" disabled selected>Selecciona una hora</option>
                                <option value="">10:00</option>
                                <option value="">11:00</option>
                                <option value="">12:00</option>
                                <option value="">13:00</option>
                                <option value="">14:00</option>
                                <option value="">15:00</option>
                                <option value="">16:00</option>
                                <option value="">17:00</option>
                            </select>
                        </div>
                        <h4 className="font-medium ml-9 mt-5">Registra tus datos personales</h4>
                        <div className="flex flex-row justify-center pt-5">
                            <input className="w-[470px] h-14 font-light pl-2" type="text" placeholder="Nombre(s)" />
                        </div>
                        <div className="flex flex-row justify-center pt-5 gap-7">
                            <input className="w-[220px] h-14 font-light pl-2" type="text" placeholder="Apellido paterno" />
                            <input className="w-[220px] h-14 font-light pl-2" type="text" placeholder="Apellido materno" />
                        </div>
                        <div className="flex flex-row justify-around pt-5 gap-7">
                            <input
                                className={`border-[1px] border-[#220871] rounded-lg font-light w-24 h-10 cursor-pointer transition-all ${selectedButton === "Hombre" ? "bg-[#220871] text-white" : ""
                                    }`}
                                type="submit"
                                value="Hombre"
                                onClick={() => handleButtonClick("Hombre")}
                            />
                            <input
                                className={`border-[1px] border-[#220871] rounded-lg font-light w-24 h-10 cursor-pointer transition-all ${selectedButton === "Mujer" ? "bg-[#220871] text-white" : ""
                                    }`}
                                type="submit"
                                value="Mujer"
                                onClick={() => handleButtonClick("Mujer")}
                            />
                        </div>
                        <div className="flex flex-row justify-center pt-5 gap-7">
                            <input className="w-[220px] h-14 font-light pl-2" type="tel" pattern="[0-9]{10}" placeholder="Teléfono" />
                            <input className="w-[220px] h-14 font-light pl-2" type="email" placeholder="Correo electrónico" />
                        </div>
                        <h4 className="font-medium ml-9 mt-5">Selecciona tu fecha de nacimiento</h4>
                        <div className="flex flex-row justify-center pt-5">
                            <input className="w-[470px] h-14 font-light pl-2" 
                                            type="date" 
                                            id="fechaNacimiento"
                                            name="fechaNacimiento"
                                            value={fechaNacimiento}
                                            max={getMaxDate()}
                                            onChange={(e) => setFechaNacimiento(e.target.value)}
                                            required />
                        </div>
                        <h4 className="font-medium ml-9 mt-5">Selecciona tú doctor</h4>
                        <div className="flex flex-row justify-center gap-7">
                            <div className="pt-5">
                                <select className="w-[220px] h-14 font-light pl-2">
                                    <option value="" disabled selected>Especialidad</option>
                                    <option value="">Odontologo</option>
                                    <option value="">Psicologo</option>
                                    <option value="">Nutrisionista</option>
                                    <option value="">Cardiolo</option>
                                </select>
                            </div>
                            <div className="pt-5">
                                <select className="w-[220px] h-14 font-light pl-2">
                                    <option value="" disabled selected>Doctor</option>
                                </select>
                            </div>
                        </div> 
                    </div>
                    <div className="p-3">
                        <div className="flex flex-row justify-center">
                            <button className="bg-[#220861] text-white w-28 h-10 rounded-lg font-medium">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}