import { PrimeiroComponente } from "./components/PrimeiroComponente";

export default function Home() {
return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">
      Primeiro Componente
    </h1>
    <button className="px-6 py-2.5 bg-pink-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
      Clique aqui
    </button>
  </div>
);
}
