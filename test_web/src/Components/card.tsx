import Image from "next/image";

export default function CityCard() {
    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10">
            <div className="group relative bg-white rounded-lg">
                <div className="absolute top-0 left-0 right-0 text-center">
                    <h2 className="text-black text-2xl mt-6">Santiago de Cali</h2>
                </div>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200 lg:aspect-none">
                    <Image src="/Backgrounds/Cali.png" alt="Imagen Ciudad"
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        width={1000}
                        height={1000} />
                </div>
                <div className="mt-4 flex flex-col">
                    <div className="flex text-center py-2 border-b-2 justify-between" style={{ borderColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <div className="flex flex-row">
                            <Image src="/Icons/temp.png" width={30} height={30} alt="icono temperatura" />
                            <h3 className="text-sm text-gray-700"> Temperatura </h3>
                        </div>
                        <p className="text-black ">5000</p>
                    </div>
                    <div className="flex text-center py-2 border-b-2 justify-between" style={{ borderColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <div className="flex flex-row">
                            <Image src="/Icons/humidity.png" width={30} height={30} alt="icono humedad" />
                            <h3 className="text-sm text-gray-700"> Humedad </h3>
                        </div>
                        <p className="text-black ">5000</p>
                    </div>
                    <div className="flex text-center py-2 justify-between">
                        <div className="flex flex-row">
                            <Image src="/Icons/wind.png" width={30} height={30} alt="icono velocidad viento" />
                            <h3 className="text-sm text-gray-700"> Velocidad Viento </h3>
                        </div>
                        <p className="text-black ">5000</p>
                    </div>
                </div>
            </div>
        </div>
    );
}