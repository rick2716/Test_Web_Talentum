import CityCard from "@/Components/card";

export default function Home() {
    return (
        <div className="home">
            <div className="px-4 py-5">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="ciudad" className="block text-sm font-medium leading-6">Ciudad</label>
                        <div className="mt-2">
                            <input id="ciudad" name="ciudad" type="text" autoComplete="ciudad"
                                required className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-1/10 justify-center rounded-md bg-purple-400 bg-opacity-70 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500">
                            Buscar
                        </button>
                    </div>
                </form>
                <div className="flex justify-around space-x-10">
                    <CityCard />
                    <CityCard />
                    <CityCard />
                </div>
            </div>
        </div>
    );
}