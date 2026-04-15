import Image from "next/image";
const Navbar = ()=>{

//aca va el js

//y aca lo que se mezcla en html
    return(
        <header className="flex">
            <div>
                <p>logo</p>
                <p>Mis recetas</p>
            </div>
            <nav>
                <p>Categorías</p>
                <p>Recetas</p>
                <p>Contacto</p>
            </nav>
        </header>

    );
}

export default Navbar;