import Image from "next/image";
import { FC } from "react";

interface CityCardProps {
    nombre: string;
    clima: string;
    temp: number;
    humedad: number;
    wind: number;
    imgUrl: string;
}

const CityCard: FC<CityCardProps> = ({ nombre, clima, temp, humedad, wind, imgUrl }) => {
    const today = new Date();

    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const day = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;

    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10">
            <div className="group relative bg-white rounded-lg">
            <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200 lg:aspect-none">
                    <Image 
                        src={imgUrl} 
                        alt="Imagen Ciudad"
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        width={1000}
                        height={1000} 
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-white to-transparent text-center text-[#25238b] py-2">
                        <p className="text-lg font-semibold">Clima / {clima}</p>
                    </div>
                    <div className="absolute top-0 left-0 w-full text-center py-2">
                        <h2 className="text-[#25238b] font-extrabold text-2xl mt-6 bg-gradient-to-r from-transparent via-white to-transparent">
                            {nombre.toUpperCase()}
                        </h2>
                        <h3 className="text-[#25238b] font-normal text-xl">{formattedDate}</h3>
                        <h1 className="text-[#25238b] font-bold text-6xl">{temp}°C</h1>
                    </div>
                </div>
                <div className="mt-4 flex flex-col px-4">
                    <div className="flex text-center py-2 border-b-2 justify-between items-center" style={{ borderColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <div className="flex flex-row items-center">
                            <Image src="/Icons/temp.png" width={30} height={30} alt="icono temperatura" />
                            <h3 className="text-sm text-gray-700"> Temperatura </h3>
                        </div>
                        <p className="text-black ">{temp}°C</p>
                    </div>
                    <div className="flex text-center py-2 border-b-2 justify-between items-center" style={{ borderColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <div className="flex flex-row items-center">
                            <Image src="/Icons/humidity.png" width={30} height={30} alt="icono humedad" />
                            <h3 className="text-sm text-gray-700"> Humedad </h3>
                        </div>
                        <p className="text-black ">{humedad}%</p>
                    </div>
                    <div className="flex text-center py-2 justify-between items-center">
                        <div className="flex flex-row items-center">
                            <Image src="/Icons/wind.png" width={30} height={30} alt="icono velocidad viento" />
                            <h3 className="text-sm text-gray-700"> Velocidad Viento </h3>
                        </div>
                        <p className="text-black ">{wind} m/s</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CityCard;