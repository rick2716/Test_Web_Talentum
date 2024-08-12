import CityCard from "@/Components/card";

export default function Home() {
    return (
        <div className="home">
            <div className="px-4 py-4">
                <form className="flex w-full items-center justify-start space-x-2 px-1.5">
                    <input id="ciudad" name="ciudad" type="text" autoComplete="ciudad" placeholder="Ciudad"
                        required className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    <button type="submit" className="rounded-md bg-purple-400 bg-opacity-70 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500">
                        Buscar
                    </button>
                </form>
            </div>
            <div className="grid grid-cols-3 px-6 gap-10">
                <CityCard />
                <CityCard />
                <CityCard />
                <CityCard />
                <CityCard />
                <CityCard />
            </div>
        </div>
    );
}