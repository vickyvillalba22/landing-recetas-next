// 1. declaramos que será use client. aunque no haya eventos, el use client es porque vamos a usar useState. 
// Los useState por ejemplo usan memoria del browser, entonces necesita usar el lado del cliente/navegador. 
// Si no aclaramos que es client por default la deja como server component.
// los componentes hijos lo heredan
'use client'

// 3. importamos axios: librería de JavaScript que permite hacer peticiones HTTP, a APIs
// maneja los errores de forma más clara, convierte la respuesta a JSON automáticamente, y tiene una sintaxis un poco más limpia.
import axios from 'axios';

import { useState, useEffect } from 'react';

import HeroSection from "@/components/HeroSection";
import CardsGrid from "@/components/CardsGrid";

const HomeContainer = () => {

  // 2. declaramos el estado del array
  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(true)

  // 4. armamos la funcion asincrónica para traer la informacion. el tema es buscar bien la clave que vamos a usar de ese json. en este caso es recipes.
  const handleGetItems = async()=>{

    try {

        const response = await axios.get('https://dummyjson.com/recipes?limit=20&skip=0')
        const data = response.data.recipes
        
        // 5. la guardamos en memoria
        setItems(data)
        setLoading(false)
        // cuando hay varios set, hace todos juntos y después re-renderiza

    } catch (error) {
        console.log("hubo un error en el fetch", error)
    }
    
  }

  // 6. useEffect (funcion, array de dependencias).
  // función que se ejecuta cuando se monta el componente (onMounted)
  // array de dependencias: es lo que le dice al useEffect cuando tiene que ejecutarse. es obligatorio. si esta vacío se va a ejecutar una sola vez. si va algo dentro, puede ser una variable del state y se ejecutara las veces que cambie esas variables del state, se vuelve a correr

  useEffect(()=>{
    // eslint-disable-next-line
    handleGetItems()
  }, [])

  return (

    <div className="w-[90%] flex flex-col content-center">

      <HeroSection />

      <section>

        {loading && <div>Loading...</div>}        
        {!loading && <CardsGrid items={items} />}

      </section>

    </div>

  )
}

export default HomeContainer