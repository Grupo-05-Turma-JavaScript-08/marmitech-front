
function NavBar() {
    return (
        <nav className="flex justify-between py-4 p-10">
            <div className=" w-full grid grid-cols-2 justify-between text-lg items-center">
                <div className="flex ">
                    <h1 className="text-2xl font-bold relative after:content-[''] 
                    after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px]
                     after:bg-[black]  after:transition-all after:duration-300 
                     hover:after:w-full hover:after:left-0">Marmitech</h1>
                </div>
                <div className="flex gap-8 justify-end items-center font-semibold">
                    <span className="hover:text-[#d53415] transition-colors duration-300 active:text-sky-200">Home</span>
                    <span className="hover:text-[#d53415] transition-colors duration-300 active:text-sky-200">Sobre</span>
                    <span className="hover:text-[#d53415] transition-colors duration-300 active:text-sky-200">Produtos</span>
                    <div className="flex gap-2">
                        <button className="relative overflow-hidden px-6 py-3 bg-[#000] group border-2
                     border-[#000] cursor-pointer">
                            <span className="absolute inset-0 rounded-3xl bg-[#FDC749] scale-0 
                        group-hover:scale-150 transition-transform duration-500
                        active:bg-[#FDC749]/40"></span>
                            <span className="relative text-[#FDC749] z-10 group-hover:text-[#000]
                        transition-colors duration-500">Peça Já</span>
                        </button>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default NavBar