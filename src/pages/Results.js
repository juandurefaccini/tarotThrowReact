import CardsCarousel from '../components/results/CardsCarousel'
import './Results.css'

export default function Results() {
    return (
        <div className='Results'>
            <h1 className='Results__title'>Results</h1>
            <div className='Results__Cards'>
                <CardsCarousel></CardsCarousel>
            </div>
        </div>
    )
}
