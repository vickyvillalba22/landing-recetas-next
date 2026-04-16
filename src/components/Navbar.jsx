import { domine, albertSans } from "@/app/layout";
const Navbar = ()=>{

//aca va el js

//y aca lo que se mezcla en html
//preguntas: imagenes, el no wrap que se le aplica a todo
    return(
        <header className="flex w-full justify-between h-[10vh] content-center flex-wrap">
            <div className="w-1/3 flex gap-8">
                <p>logo</p>
                <p className="font-serif">Mis recetas</p>
            </div>
            <nav className="flex gap-16">
                <p>Categorías</p>
                <p>Recetas</p>
                <p>Contacto</p>
            </nav>
        </header>

    );
}

export default Navbar;