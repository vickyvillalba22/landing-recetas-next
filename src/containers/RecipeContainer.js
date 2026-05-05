'use client'

import { useState, useEffect } from "react"
import axios from "axios"

const RecipeContainer = ({id}) => {

    const [item, setItem] = useState({})
    
    //agregar siempre un loading también o incluso un manejo de 'not found'

    const handleGetRecipe = async () => {

        try {
            const response = await axios.get(`https://dummyjson.com/recipe/${id}`)
            console.log(response);
            
            const data = response.data
            setItem(data)
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(()=>{
        // eslint-disable-next-line
        handleGetRecipe()
    })

  return (
    <div>
        <h1>{item.name}</h1>
    </div>
  )
}

export default RecipeContainer