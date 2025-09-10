import type Produto from "../../../models/Produto";
import SeccaoTitulo from "../../secaotitulo/SeccaoTitulo";
import CardProduto from "../cardproduto/CardProduto";

const produtos: Produto[] = [
  {
    id: 1,
    nome: "Marmita Fitness",
    descricao: "Frango grelhado com arroz integral e salada.",
    categoria: "Marmitas",
    preco: 15.9,
    image:
      "https://loja.gardenshopping.com.br//media/produtos/8b872c850b05ee305736537ad094b924.jpg",
  },
  {
    id: 1,
    nome: "Marmita Fitness",
    descricao: "Frango grelhado com arroz integral e salada.",
    categoria: "Marmitas",
    preco: 15.9,
    image:
      "https://loja.gardenshopping.com.br//media/produtos/8b872c850b05ee305736537ad094b924.jpg",
  },
  {
    id: 1,
    nome: "Marmita Fitness",
    descricao: "Frango grelhado com arroz integral e salada.",
    categoria: "Marmitas",
    preco: 15.9,
    image:
      "https://loja.gardenshopping.com.br//media/produtos/8b872c850b05ee305736537ad094b924.jpg",
  },
  {
    id: 1,
    nome: "Marmita Fitness",
    descricao: "Frango grelhado com arroz integral e salada.",
    categoria: "Marmitas",
    preco: 15.9,
    image:
      "https://loja.gardenshopping.com.br//media/produtos/8b872c850b05ee305736537ad094b924.jpg",
  },
  {
    id: 1,
    nome: "Marmita Fitness",
    descricao: "Frango grelhado com arroz integral e salada.",
    categoria: "Marmitas",
    preco: 15.9,
    image:
      "https://loja.gardenshopping.com.br//media/produtos/8b872c850b05ee305736537ad094b924.jpg",
  },
];

function ListaProduto() {
  return (
    <div className="flex justify-center w-full my-4 bg-amber-900">
      <div className="container flex flex-col mx-2">
        <SeccaoTitulo
          titulo="NOSSOS PRATOS MAIS POPULARES"
          descricao="Descubra nossos pratos de maior sucesso, feitos com ingredientes frescos e muito carinho."
        />
        <div className="container mx-auto my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaProduto;
