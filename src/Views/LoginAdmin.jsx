import { Header } from "../components/Header"

export const LoginAdmin = () => {
    return(
        <>
            <Header></Header>
            <div className="relative w-full h-[90.3vh]">
                <div className="bg-backLogAdmin bg-cover bg-center w-full h-full brightness-90">
                    <div className="flex flex-row justify-center text-center">
                        <div className="flex flex-col items-center w-96 h-[400px] bg-[#eaeaea] mt-40 rounded-2xl ">
                            <div className="pt-10">
                                <h2 className="text-2xl font-bold">Iniciar sesión</h2>
                                <h4 className="text-[#959595] font-semibold text-base text-center pt-5">Bienvenido, por favor ingrese sus datos</h4>
                            </div>
                            <div className="pt-8">
                                <input className="w-72 h-12 rounded-md border-[1px] border-solid border-[#FFFFFF] placeholder:pl-2" type="text" placeholder="Correo Electrónico"/>
                            </div>
                            <div className="pt-5">
                                <input className="w-72 h-12 rounded-md border-[1px] border-solid border-[#FFFFFF] placeholder:pl-2" type="password" placeholder="Contraseña"/>
                            </div>
                            <div className="pt-8">
                                <button className="bg-[#D4E3FC] w-72 h-12 text-2xl font-light rounded-xl">Iniciar sesión</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}