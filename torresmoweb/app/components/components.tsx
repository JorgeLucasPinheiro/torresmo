import Image from "next/image"

export function Nav () {
    return (
        <div className="flex sticky top-0 sm:text-lg items-center justify-center bg-orange-800 mx-auto opacity-90 border-solid border-2 border-orange-900"  >
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
        <>
            <div className="w-full bg-orange-700 text-center text-4xl">
                    <p>Nossos Produtos</p>
                </div>
            <div className=" md:flex justify-center" id="Produtos">
                <SingleProduts name="Banha suina" price="R$ 29,99"/>
                <SingleProduts name="Torresmo" price="R$ 39,99"/>
                <SingleProduts name="Mandioca" price="R$ 5,99"/>
            </div>
        </>
    )
}

export function Banner() {
    return (
        <>
            <div className=" md:flex justify-center" id="Banner">
                <div className="w-full flex flex-col items-center ">
                    <div className=" bg-orange-800 w-full h-svh text-center text-5xl">
                        <div className="flex flex-col items-center">
                            <h1 className="py-10 mx-10 my-5 text-center">Escolha o melhor para você e para sua familia.</h1>
                            <p className="md:m-32 py-10 mx-5 mt-5 text-center"> <span className="text-orange-500"> Torresmo Pinheiro</span> Sabor e Qualidade</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full items-center bg-orange-900">
                <div className="flex flex-col items-center bg-orange-700 my-3 md:my-2">
                    <p className="m-2 sm:text-justify text-center md:text-3xl text-2xl">
                    Bem-vindo à Torresmo Pinheiro, sua porta de entrada para a autenticidade e tradição culinária! Somos uma empresa dedicada à produção artesanal de torresmo e banha de porco, proporcionando aos nossos clientes uma experiência gastronômica única.
                    </p>
                </div>
            </div>
        </>
    )
}

export function About() {
    return (
        <div className="w-full items-center bg-orange-900">
            <div className="flex flex-col items-center bg-orange-700 m-3 md:my-2 rounded-lg">
                <p className="m-2 sm:text-justify text-center md:text-4xl text-3xl">Compromisso com a Qualidade:</p>

                <p className="m-2 sm:text-justify text-center md:text-3xl text-2xl">
                  A qualidade é a nossa prioridade. Trabalhamos em parceria com produtores locais que compartilham nosso compromisso com a criação responsável e sustentável de suínos. Cada pedaço de torresmo é cuidadosamente preparado para oferecer uma textura crocante e um sabor inigualável, enquanto nossa banha é extraída e refinada para garantir pureza e frescor.
                </p>
            </div>
        </div>
    )
}

export function Contacts() {
    return (
        <div className="">
            <div className="flex flex-row items-center justify-center bg-orange-700 m-2 rounded-lg">
                <div className="bg-orange-800">
                    <Image className="rounded-full mx-1"
                            src='/whatsapp.png'
                            width={100}
                            height={100}
                            alt="Foto do torresmo"
                        />
                </div>
                <div>
                    <Image className="rounded-full m-1 mt-3 md:mt-1"
                            src='/facebook.png'
                            width={120}
                            height={100}
                            alt="Foto do torresmo"
                        />
                </div>
                <div>
                    <Image className="rounded-full m-1 mt-3 md:mt-1"
                            src='/instagram.png'
                            width={100}
                            height={100}
                            alt="Foto do torresmo"
                        />
                </div>
            </div>
        </div>
    )
}