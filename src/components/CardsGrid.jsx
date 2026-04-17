import Card from "./Card"

const CardsGrid = () => {

    const gridItems = [
        {
            name: 'Pizza',
            ranking: 8
        },
        {
            name: 'Hamburguesa',
            ranking: 10
        },
        {
            name: 'Sushi',
            ranking: 7
        },
        {
            name: 'Helado',
            ranking: 9
        },
    ]

  return (

    <div className="grid grid-cols-3 gap-4">

        {gridItems.map((item, index)=>(

            <Card key={index} name={item.name} />

        ))}

    </div>

  )
}

export default CardsGrid