import Image from "next/image"

export function Nav () {
    return (
        <div className="block p-3 bg-slate-700">
            <a href="/" className="p-3 hover:bg-slate-600">Inicio</a>
            <a href="/" className="p-3 hover:bg-slate-600">Produtos</a>
            <a href="/" className="p-3 hover:bg-slate-600">Sobre</a>
            <a href="/" className="p-3 hover:bg-slate-600">Contato</a>
            <a href="/" className="p-3 hover:bg-slate-600">Localização</a>
        </div>
    )
}

export function Products () {
    return (
        <div className="bg-slate-900 md:flex justify-center" id="Produtos">
            <div className="justify-center bg-slate-800 m-2 rounded-sm">
                <Image className="m-5 p-1 rounded-lg"
                    src='/torresmo.jpg'
                    width={400}
                    height={200}
                    alt="Foto do torresmo"
                />
                <p className="text-center m-5">Torresmo</p>
            </div>
            
            <div className="justify-center bg-slate-800 m-2 rounded-sm">
                <Image className="m-5 rounded-lg"
                    src='/banha.jpg'
                    width={400}
                    height={300}
                    alt="Foto do torresmo"
                    
                />
                <p className="text-center">Banha de Porco</p>
            </div>
        </div>
    )
}