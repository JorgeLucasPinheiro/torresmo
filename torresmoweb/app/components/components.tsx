import Image from "next/image"

export function Nav () {
    return (
        <div className="flex sticky top-0 sm:text-lg items-center justify-center bg-orange-800 mx-auto opacity-95"  >
            <a href="/" className="sm:p-3 p-1.5 hover:bg-orange-600">Inicio</a>
            <a href="/" className="sm:p-3 p-1.5 hover:bg-orange-600">Produtos</a>
            <a href="/" className="sm:p-3 p-1.5 hover:bg-orange-600">Sobre</a>
            <a href="/" className="sm:p-3 p-1.5 hover:bg-orange-600">Contato</a>
            <a href="/" className="sm:p-3 p-1.5 hover:bg-orange-600">Localização</a>
        </div>
    )
}

interface SingleProductProps {
    name: string;
    price: string;
}

function SingleProduts({ name, price }: SingleProductProps) {
    return (
        <div className=" md:flex justify-center" id="Produtos">
            <div className="flex flex-col items-center bg-orange-700 m-3 md:my-2 rounded-lg">
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

export function Banner() {
    return (
        <div className=" md:flex justify-center" id="Banner">
            <div className="w-full flex flex-col items-center ">
                <Image className="md:w-4/5 w-screen h-screen"
                    src='/torresmo.jpg'
                    width={300}
                    height={200}
                    alt="Foto do torresmo"
                    sizes=""
                />
                <div className="bg-orange-800 w-full my-2 p-2 text-center text-5xl">
                    <p>O melhor para sua familia é 
                        <span className="text-orange-500"> Torresmo Pinheiro</span>
                    </p>
                </div>
            </div>
            
        </div>
    )
}