import Image from "next/image";
import Link from 'next/link';

export default function Registro() {
    return (
        <div className="LogIn">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex space-x-4 justify-center"> 
                <Image src="/Icons/humidity.png" width={50} height={50} alt="icono humedad" style={{ filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(180deg) brightness(100%) contrast(100%)' }} />
                <Image src="/Icons/temp.png" width={50} height={50} alt="icono temperatura" style={{ filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(180deg) brightness(100%) contrast(100%)' }} />
                <Image src="/Icons/wind.png" width={50} height={50} alt="icono viento" style={{ filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(180deg) brightness(100%) contrast(100%)' }} />
              </div>
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">Iniciar Sesion</h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6">Usuario</label>
                  <div className="mt-2">
                    <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>
    
                <div className="password">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6">Contraseña</label>
                  </div>
                  <div className="mt-2">
                    <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div className="confirmPassword">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password2" className="block text-sm font-medium leading-6">Confirmar Contraseña</label>
                  </div>
                  <div className="mt-2">
                    <input id="password2" name="password2" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>
    
                <div>
                  <button type="submit" className="flex w-full justify-center rounded-md bg-purple-400 bg-opacity-70 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500">
                    Registrarse
                  </button>
                </div>
    
              </form>
    
              <p className="mt-10 text-center text-sm">
                <Link href="/" className="font-semibold leading-6 hover:underline">Voler al Inicio de Sesión</Link>
              </p>
            </div>
          </div>
        </div>
      );
  }