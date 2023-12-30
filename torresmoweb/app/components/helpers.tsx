import Image from "next/image"

export function Nav () {
    return (
        <div className="flex items-center justify-center bg-slate-700 mx-auto" >
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
        <div className=" md:flex justify-center" id="Produtos">
            <div className="flex flex-col items-center bg-slate-800 m-1 md:my-2 rounded-md">
                <Image className="rounded-lg mx-1"
                    src='/banha.jpg'
                    width={300}
                    height={200}
                    alt="Foto do torresmo"
                />
                <p className="text-center m-5">Mandioca</p>
            </div>
            <div className="flex flex-col items-center bg-slate-800 m-1 md:my-2 rounded-md">
                <Image className="rounded-lg mx-1"
                    src='/banha.jpg'
                    width={300}
                    height={200}
                    alt="Foto do torresmo"
                />
                <p className="text-center m-5">Mandioca</p>
            </div>
            <div className="flex flex-col items-center bg-slate-800 m-1 md:my-2 rounded-md">
                <Image className="rounded-lg mx-1"
                    src='/banha.jpg'
                    width={300}
                    height={200}
                    alt="Foto do torresmo"
                />
                <p className="text-center m-5">Mandioca</p>
            </div>
        </div>
    )
}