import Image from "next/image"

export function Nav () {
    return (
        <div className="flex items-center justify-center bg-orange-800 mx-auto" >
            <a href="/" className="p-3 hover:bg-orange-600">Inicio</a>
            <a href="/" className="p-3 hover:bg-orange-600">Produtos</a>
            <a href="/" className="p-3 hover:bg-orange-600">Sobre</a>
            <a href="/" className="p-3 hover:bg-orange-600">Contato</a>
            <a href="/" className="p-3 hover:bg-orange-600">Localização</a>
        </div>
    )
}

function SingleProduts({name, price}) {
    return (
        <div className=" md:flex justify-center" id="Produtos">
            <div className="flex flex-col items-center bg-orange-700 m-1 md:my-2 rounded-md">
                <Image className="rounded-lg m-1 mt-3 md:mt-1"
                    src='/banha.jpg'
                    width={300}
                    height={200}
                    alt="Foto do torresmo"
                />
                <p className="text-center m-5 text-4xl">{name}</p>
                <p className="p-2 text-3xl">{price}</p>
                <button className="bg-orange-600 hover:bg-orange-800 p-3 m-3 rounded-3xl text-2xl" >Comprar</button>
            </div>
        </div>
    )
}

export function Products() {
    return (
        <div className=" md:flex justify-center" id="Produtos">
            <SingleProduts name="Banha suina" price="R$ 29,99"/>
            <SingleProduts name="Torresmo" price="R$ 39,99"/>
            <SingleProduts name="Mandioca" price="R$ 5,99"/>
        </div>
    )
}