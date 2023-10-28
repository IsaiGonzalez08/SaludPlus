import { Header } from "../components/Header"

export const Registro = () => {
    return(
        <>
            <Header></Header>
            <div className="relative w-full h-[90.3vh]">
                <div className="bg-backRegistro bg-cover bg-center w-full h-full brightness-90">
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-col items-center w-96 h-[450px] bg-[#eaeaea] mt-40 rounded-2xl ">
                            <div className="pt-10">
                                <h2 className="text-2xl font-bold">Crea tú cuenta</h2>
                            </div>
                            <div className="pt-8">
                                <input className="w-72 h-12 rounded-md border-[1px] border-solid border-[#FFFFFF] placeholder:pl-2" type="text" placeholder="Correo Electrónico"/>
                            </div>
                            <div className="pt-5">
                                <input className="w-72 h-12 rounded-md border-[1px] border-solid border-[#FFFFFF] placeholder:pl-2" type="password" placeholder="Contraseña"/>
                            </div>
                            <div className="pt-5">
                                <input className="w-72 h-12 rounded-md border-[1px] border-solid border-[#FFFFFF] placeholder:pl-2" type="password" placeholder="Confirmar contraseña"/>
                            </div>
                            <div className="pt-8">
                                <button className="bg-[#D4E3FC] w-72 h-12 text-2xl font-light rounded-xl">Registrarme</button>
                            </div>
                            <div className="pt-5">
                                <p className="font-semibold text-xs text-center">Al crear mi cuenta acepto <br /> <a className="text-[#0d6EFD] text-center">Terminos y condiciones</a> del servicio salud+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}