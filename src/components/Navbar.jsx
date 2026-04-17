const Navbar = ()=>{

//aca va el js
const itemsNav = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Categorías',
        link: '/categorias',
    },
        {
        name: 'Recetas',
        link: '/recetas',
    },
    {
        name: 'Contacto',
        link: '/contacto',
    },
]

//y aca lo que se mezcla en html
//preguntas: imagenes, el no wrap que se le aplica a todo
    return(
        <header className="flex w-full justify-between h-[10vh] content-center flex-wrap">
            <div className="w-1/3 flex gap-8">
                <p>logo</p>
                <p className="font-serif">Mis recetas</p>
            </div>
            <nav>
                <ul className="flex gap-8">
                    {itemsNav.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            </nav>
        </header>

    );
}

export default Navbar;