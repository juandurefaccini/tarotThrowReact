import './Cards.css'
import Card from './Card'

export default function CardsCarousel() {
    return (
        <div className='CardsCarousel'>
            <Card pokemon='https://pokeapi.co/api/v2/pokemon/1/'></Card>
        </div>
    )
}
