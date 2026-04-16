//preguntas: como incorporo iconos

const HeroSection = ()=>{
    return(
        <section className="h-[80vh] border flex content-center flex-wrap">
            <div className="w-1/2 flex flex-col gap-8 h-fit">
                <h1 className="font-serif text-4xl">Comer sano es una parte muy importante de tu estilo de vida</h1>
                <p className="text-2xl">Recetas listas para preparar las comidas más ricas!</p>
                <button className="bg-red-400 p-2 rounded-2xl">Ver todas las recetas</button>
            </div>
        </section>
    )
}

export default HeroSection