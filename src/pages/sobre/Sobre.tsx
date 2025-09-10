

function Sobre() {
    return (
        <section className="flex justify-center ">
            <div className='container grid grid-cols-2 text-[#000] bg-white/20 rounded-4xl p-5 shadow-lg'>
                <div className="flex flex-col gap-8 items-center justify-center  p-25">
                    <h2 className='text-5xl font-bold '>
                        MARMITECH
                    </h2>
                    <p className='text-xl leading-relaxed text-center '>
                        Na Marmitech, acreditamos que comer bem deve ser simples, prático e saboroso. Unimos inovação e gastronomia para levar até você marmitas frescas, nutritivas e cheias de sabor.
                        Tudo isso a apenas um clique de distância. <br />
                        Nosso objetivo é transformar a sua rotina com refeições que equilibram qualidade, praticidade e carinho, entregues de forma rápida e confiável. Porque, para nós, inovação só faz sentido quando anda junto do sabor que conquista no primeiro pedaço.
                    </p>

                </div>

                <div className="flex justify-center ">
                    <img
                        src="https://i.ibb.co/q30P48MZ/cristiane-ferreiranegocios-com-proposito-cced0583.webp"
                        alt="Imagem Página Home"
                        className='w-2/3 rounded-4xl shadow-2xl'
                    />
                </div>
            </div>
        </section>
    )
}

export default Sobre