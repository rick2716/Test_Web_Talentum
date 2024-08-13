'use client'
import CityCard from "../../Components/card";
import citiesData from "../../../public/weather/weather.json"; // Importa directamente el JSON
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface City {
    name: string;
    main: { temp: number; temp_min: number; temp_max: number; humidity: number; };
    wind: { speed: number; };
    weather: { id: number; main: string; }[];
    base: string;
    sys: { type: number; id: number; country: string; };
    cod: number;
}

interface CitiesData {
    [key: string]: City;
}

const citiesDataTyped: CitiesData = citiesData;

export default function Home() {
    const [filteredCities, setFilteredCities] = useState<City[]>(Object.values(citiesDataTyped));
    const router = useRouter();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
    
        if (isAuthenticated !== 'true') {
          router.push('/');
        }
      }, [router]);

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const searchCity = formData.get('ciudad') as string;

        if (searchCity) {
            const filtered = Object.values(citiesDataTyped).filter(city =>
                city.name.toLowerCase().includes(searchCity.toLowerCase())
            );
            setFilteredCities(filtered.length > 0 ? filtered : []);
        } else {
            setFilteredCities(Object.values(citiesDataTyped));
        }
    };


    const handleReset = () => {
        setFilteredCities(Object.values(citiesDataTyped));
    };

    const handleLogOut = () => {
        localStorage.removeItem('isAuthenticated');
        router.push("/");
    }

    return (
        <div className="home">
            <div className="flex px-4 py-4 space-x-4">
                <form className="flex w-full items-center justify-start space-x-2 px-1.5" onSubmit={handleSearch}>
                    <input id="ciudad" name="ciudad" type="text" autoComplete="ciudad" placeholder="Ciudad"
                        required className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    <button type="submit" className="rounded-md bg-purple-400 bg-opacity-70 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500">
                        Buscar
                    </button>
                </form>
                <button onClick={handleReset} className="rounded-md bg-purple-400 bg-opacity-70 px-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500">
                    Mostrar Todas las Ciudades
                </button>
                <button onClick={handleLogOut} className="px-6 py-2 rounded-md bg-purple-400 bg-opacity-70 px-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500">
                    Salir
                </button>
            </div>
            <div className="flex flex-col items-center justify-center px-6 gap-10">
                {filteredCities.length > 0 ? (
                    <div className={"grid grid-cols-3 gap-10"}>
                        {filteredCities.map((city, index) => (
                            <CityCard
                                key={index}
                                nombre={city.name}
                                clima={city.weather[0].main}
                                temp={city.main.temp}
                                humedad={city.main.humidity}
                                wind={city.wind.speed}
                                imgUrl={`/Backgrounds/${city.name}.png`}
                            />
                        ))}
                    </div>
                ) : (
                    <h1 className="text-[#25238b] font-extrabold text-2xl">No se encontraron ciudades.</h1>
                )}
            </div>
        </div>
    );
}
