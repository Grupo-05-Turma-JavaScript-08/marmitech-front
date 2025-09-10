import { useState } from "react";
import type Produto from "../../../models/Produto";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  const [eFavorito, setEFavorited] = useState(false);

  const toggleFavorite = () => {
    setEFavorited(!eFavorito);
  };

  return (
    <div className="flex flex-col rounded-lg bg-amber-600 shadow-xl overflow-hidden relative">
      <div
        className={`absolute top-0 left-0 p-2 rounded-br-lg cursor-pointer ${
          eFavorito ? "bg-yellow-400" : "bg-gray-300"
        }`}
        onClick={toggleFavorite}
      >
        <svg
          className={`w-5 h-5 ${
            eFavorito ? "text-yellow-700" : "text-gray-600"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
        </svg>
      </div>

      <img
        className="w-full h-48 object-cover"
        src={produto.image}
        alt={produto.nome}
      />

      <div className="p-4 text-white">
        <p className="text-xl font-bold">${produto.preco.toFixed(2)}</p>

        <p className="text-sm mt-1">{produto.nome}</p>

        <button className="mt-4 w-full bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 rounded-md">
          Comprar agora
        </button>
      </div>
    </div>
  );
}

export default CardProduto;
