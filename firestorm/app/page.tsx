
export default function Home() {
  return (
    <main className="p-24 bg-black">
      <div className='container flex flex-col items-center content-center'>
        <form className="relative min-w-1000 w-1000 min-h-500 h-500 bg-white bg-no-repeat bg-clip-padding bg-cover rounded opacity-90 backdrop-filter-blur-30">
            <a className="relative top-252 left-750 w-28 h-20"></a>
            <h1 className="relative font-signika text-black font-bold m-4 w-308 h-54 items-center">Bem-vindo ao nosso site!</h1>
            <h2 className="relative font-signika text-black font-bold m-4 w-308 h-54 items-center">Confira nossas redes sociais abaixo.</h2>
            <div className='container flex flex-col content-center items-center'>
              <button className='relative rounded-full font-signika border font-bold bg-orange-500 m-4 py-2 px-4 items-center transition duration-500 hover:scale-125 hover:bg-orange-700'>Instagram</button>
              <button className='relative rounded-full font-signika border font-bold bg-blue-500 m-4 py-2 px-4 items-center transition duration-500 hover:scale-125 hover:bg-blue-700'>Facebook</button>
            </div>
        </form>
      </div>
      <div className="relative container flex flex-col items-center">
        <h1 className="relative font-signika text-white font-bold m-4 w-308 h-54 items-center">Site em desenvolvimento!</h1>
      </div>
    </main>
  );
}
