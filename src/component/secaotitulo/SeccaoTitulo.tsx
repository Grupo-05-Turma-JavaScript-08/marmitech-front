interface SeccaoTituloProps {
  titulo: string;
  descricao: string;
}

function SeccaoTitulo({ titulo, descricao }: SeccaoTituloProps) {
  return (
    <div className="text-center my-8">
      <h2 className="text-4xl font-extrabold text-amber-950">{titulo}</h2>
      <p className="mt-4 text-lg text-gray-300">{descricao}</p>
    </div>
  );
}
export default SeccaoTitulo;
