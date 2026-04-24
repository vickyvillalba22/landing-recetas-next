import Card from "./Card"
import gridItems from "@/data/dummy"

const CardsGrid = () => {

  return (

    <div className="grid grid-cols-3 gap-4">

        {gridItems.map((item, index)=>(

            <Card key={index} name={item.name} />

        ))}

    </div>

  )
}

export default CardsGrid