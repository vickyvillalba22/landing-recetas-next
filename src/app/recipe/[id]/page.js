import RecipeContainer from '@/containers/RecipeContainer'
import React from 'react'

const page = async ({params}) => {

  console.log(params);
  
  const { id } = await params

  return (
    <div>
      <RecipeContainer id={id} />
    </div>

    
  )
}

export default page