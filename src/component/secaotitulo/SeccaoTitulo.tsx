interface SeccaoTituloProps {
  titulo: string;
  descricao: string;
}

function SeccaoTitulo({ titulo, descricao }: SeccaoTituloProps) {
  return (
    <div className="text-center my-8">
      <h2 className="text-4xl font-extrabold text-[#d53415]">{titulo}</h2>
      <p className="mt-4 text-lg text-[#000]">{descricao}</p>
    </div>
  );
}
export default SeccaoTitulo;
