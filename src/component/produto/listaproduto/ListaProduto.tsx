import type Produto from "../../../models/Produto";
import SeccaoTitulo from "../../secaotitulo/SeccaoTitulo";
import CardProduto from "../cardproduto/CardProduto";

const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Marmita Fitness Frango',
    descricao: 'Frango grelhado + arroz integral + brócolis no vapor + batata-doce assada',
    categoria: 'Fitness',
    preco: 22.90,
    image: 'https://i.ibb.co/67H35bXz/Frango-grelhado-arroz-integral-br-colis-no-vapor-batata-doce-assada.webp'
  },
  {
    id: 2,
    nome: 'Marmita Fitness Salmão',
    descricao: 'Salmão grelhado + quinoa + espinafre refogado + abobrinha grelhada',
    categoria: 'Fitness',
    preco: 28.90,
    image: 'https://i.ibb.co/YBR2Z0Sc/Salm-o-grelhado-quinoa-espinafre-refogado-abobrinha-grelhada.png'
  },
  {
    id: 3,
    nome: 'Marmita Massa Integral',
    descricao: 'Penne integral ao molho de tomate rústico + almôndegas de frango + parmesão ralado',
    categoria: 'Massa',
    preco: 24.50,
    image: 'https://i.ibb.co/hFT8YVhv/Penne-integral-ao-molho-de-tomate-r-stico-alm-ndegas-de-frango-parmes-o-ralado.jpg'
  },
  {
    id: 4,
    nome: 'Marmita Tradicional',
    descricao: 'Bife acebolado + arroz branco + feijão carioca + farofa + couve refogada',
    categoria: 'Tradicional',
    preco: 19.90,
    image: 'https://i.ibb.co/Myj7Tx6L/Bife-acebolado-arroz-branco-feijao-carioca-brocolis-448x298-1.jpg'
  },
  {
    id: 5,
    nome: 'Marmita Vegana Mezzaluna',
    descricao: 'Mezzaluna vegana recheada com ricota de castanhas e espinafre  + molho de tomate artesanal',
    categoria: 'Vegana',
    preco: 26.90,
    image: 'https://i.ibb.co/hRpPQPGC/Mezzaluna-vegana-recheada-com-ricota-de-castanhas-e-espinafre-molho-de-tomate-artesanal-salada-verde.png'
  },
  {
    id: 6,
    nome: 'Marmita Vegana Curry',
    descricao: 'Grão-de-bico ao curry + arroz integral + abóbora assada + mix de legumes (cenoura, vagem)',
    categoria: 'Vegana',
    preco: 23.90,
    image: 'https://i.ibb.co/SwypXR1D/receita-curry-de-grao-de-bico-e-alho-poro-com-arroz-integral-de-coco-1665171669.jpg'
  }
,
];

function ListaProduto() {
  return (
    <div className="flex justify-center w-full bg-[#FDC749]/10 rounded-4xl ">
      <div className="container flex flex-col mx-2 bg-white/20 rounded-4xl p-6 shadow-md">
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
