import { HeaderUsuario } from "../components/HeaderUsuario"
import { useState } from "react";

export const VistaUsuario = () => {

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
        if (selectedButton === button) {
            // Si el botón seleccionado es el mismo que se hizo clic nuevamente, deselecciónalo.
            setSelectedButton(null);
          } else {
            // De lo contrario, selecciona el nuevo botón.
            setSelectedButton(button);
          }
    };

    return (
        <>
            <HeaderUsuario></HeaderUsuario>
            <div className="w-full h-[90.3vh] bg-[#D4E3FC] flex flex-row justify-center">
                <div className="flex flex-col bg-[#F4F6FA] w-[54vh] h-[88vh] rounded-sm">
                    <div className="bg-[#B9C7E0] w-full h-16 flex flex-row justify-center items-center rounded-t-smx| border-b-[#919DB0] border-b-[5px]">
                        <h2 className="text-2xl font-bold text-white">Completa el siguiente formulario</h2>
                    </div>
                    <div className="flex flex-row justify-center pt-5">
                        <select className="w-[470px] h-14 font-light pl-2">
                            <option value="" disabled selected>Selecciona tú clinica</option>
                            <option value="">Tuxtla Gutierrez</option>
                        </select>
                    </div>
                    <h4 className="font-medium ml-9 mt-5">Selecciona tú fecha y horario</h4>
                    <div className="flex flex-row justify-center pt-5">
                        <input className="w-[470px] h-14 font-light pl-2" type="date" />
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
                        <input className="w-[220px] h-14 font-light pl-2" type="email" placeholder="Correo electronico" />
                    </div>
                    <h4 className="font-medium ml-9 mt-5">Selecciona tu fecha de nacimiento</h4>
                    <div className="flex flex-row justify-center pt-5">
                        <input className="w-[470px] h-14 font-light pl-2" type="date" placeholder="Fecha de nacimiento" />
                    </div>
                    <div className="flex flex-row justify-center pt-5">
                        <button className="bg-[#220861] text-white w-28 h-10 rounded-lg font-medium">Enviar</button>
                    </div>
                </div>
            </div>
        </>
    )
}