import { NavAdmin } from "../components/NavAdmin"

export const AdminDoctores = () => {
    return(
        <div className="flex flex-row">
            <NavAdmin></NavAdmin>
            <div className="flex flex-col">
                <div className="flex flex-row justify-start pl-24 pt-16">
                    <h2 className="text-4xl font-semibold">Lista de Doctores</h2>
                </div>
                <div className="ml-40 pt-12">
                    <table className="text-2xl text-center">
                        <thead >
                            <tr>
                                <th className="pr-16">ID</th>
                                <th className="pr-16">Nombre</th>
                                <th className="pr-16">Apellidos</th>
                                <th className="pr-16">Correo Electrónico</th>
                                <th className="pr-16">Teléfono</th>
                                <th className="pr-16">Especialidad</th>
                                <th className="">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="pr-16">1</td>
                                <td className="pr-16">Isai</td>
                                <td className="pr-16">González</td>
                                <td className="pr-16">isai@gmail.com</td>
                                <td className="pr-16">9612801999</td>
                                <td className="pr-16">Odontologo</td>
                                <td>
                                    <button className='bg-[#d83848] text-[#FFFFFF] w-28 h-10 rounded-md text-lg font-semibold'>Eliminar</button>
                                    <button className='bg-[#3845d8] text-[#FFFFFF] w-28 h-10 rounded-md text-lg font-semibold'>Editar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>   
            </div>
        </div>     
    )
}