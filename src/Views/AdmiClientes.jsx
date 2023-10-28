import { NavAdmin } from "../components/NavAdmin"

export const AdmiClientes = () => {
    return(
        <div className="flex flex-row">
            <NavAdmin></NavAdmin>
            <div className="flex flex-col">
                <div className="flex flex-row justify-start pl-24 pt-16">
                    <h2 className="text-4xl font-semibold">Lista de Clientes</h2>
                </div>
                <div className="ml-40 pt-12">
                    <table className="text-2xl text-center">
                        <thead >
                            <tr>
                                <th className="pr-20">ID</th>
                                <th className="pr-20">Nombre</th>
                                <th className="pr-20">Apellidos</th>
                                <th className="pr-20">Correo Electrónico</th>
                                <th className="pr-20">Teléfono</th>
                                <th className="">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="pr-20">1</td>
                                <td className="pr-20">Gerardo</td>
                                <td className="pr-20">Ruiz</td>
                                <td className="pr-20">gera@gmail.com</td>
                                <td className="pr-20">9611818881</td>
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