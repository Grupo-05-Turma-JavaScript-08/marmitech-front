import { useEffect, useState } from "react";
function Home() {
  const carrousel = [
    {
      id: 1,
      image: "https://i.ibb.co/LXnWNdjN/output-onlinepngtools.png",
    },
    {
      id: 2,
      image: "https://i.ibb.co/0VVHrMbJ/teste-home-sombra.png",
    },
    {
      id: 3,
      image: "https://i.ibb.co/pjX2fqFP/teste-home-1-sombra.png",
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % carrousel.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <section className="w-full flex flex-col items-center pt-15 gap-30">
     
      <h2 className="font-bold text-8xl text-center mb-8">MARMITECH</h2>
    
      <div className="mt-15 relative w-full max-w-4xl flex justify-center items-center hover:scale-150 transition-all duration-500">
        {carrousel.map((item, i) => (
          <img
            key={item.id}
            src={item.image}
            alt={`Imagem ${item.id}`}
            className={`transition-opacity duration-500 object-contain max-h-96 w-auto absolute ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    
      <p
        id="textlogo"
        className="font-semibold text-5xl mt-10 mb-10 text-center max-w-3xl px-4"
      >
        Praticidade e sabor a um clique de distância.
      </p>
     
     
    </section>
  );
}
export default Home;