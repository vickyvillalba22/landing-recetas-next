'use client'

import { useState } from "react"

const Card = ({name}) => {

    const [likes, setLikes] = useState(0)
    const [cardColor, setCardColor] = useState('light')
    const [showName, setShowName] = useState(false)

    const handleLikes = ()=>{
        setLikes(likes+1)
    }
    const handleColor = ()=>{
        setCardColor(cardColor === 'light' ? 'dark' : 'light') 
    }

    const handleShowName = ()=>{
        setShowName(!showName)
    }

    return (
        
        <div className={`border ${cardColor === 'dark' ? 'bg-black' : 'bg-white'} gap-1 flex`}>

            {showName && ( <h3>{name}</h3> )}

            <button onClick={handleLikes}> Like {likes} </button>

            <button onClick={handleColor}>Toggle color</button>

            <button onClick={handleShowName}>Toggle name</button>

        </div>
        
    )

}

export default Card