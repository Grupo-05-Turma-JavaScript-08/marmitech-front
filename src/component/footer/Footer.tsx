import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react"

function Footer() {
    const data = new Date().getFullYear();

  return (
    <footer className="w-full flex justify-center bg-[#FDC749]/70  ">
        <div className="container items-center py-4 justify-center grid grid-cols-2">
            <div className="flex flex-col items-center border-r-2 border-slate-100/40">
                <p>&copy; Marmitech; {data}</p>
                <p>Todos os direitos reservados</p>
                <p>Desenvolvido pela Code7</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-lg">Acesse nossas redes sociais</p>
                <div className="flex flex-row gap-4 justify-center">
                    <GithubLogo size={48} weight="fill" className="hover:text-purple-500 transition-all duration-300"/>
                    <LinkedinLogo size={48} weight="fill" className="hover:text-sky-500 transition-all duration-300" />
                    <InstagramLogo size={48} weight="fill" className="hover:text-rose-500 transition-all duration-300"/>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer