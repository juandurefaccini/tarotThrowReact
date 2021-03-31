import React from 'react';
import './Card.css'
import Ares from '../../../src/svg/002-ankh.svg'

export default class Card extends React.Component {
    render() {
        return (
            <div className='Card'>
                <h2>{this.props.cardNumber}</h2>
                <h2 className='Card__Name'>Ares</h2>
                <img className='Card__img' src={Ares} alt="" />
                <p className='Card__Description'>
                    En la mitología griega, Ares es el dios olímpico de la guerra.
                    Es hijo de Zeus y Hera. Personificaba la valentía, la fuerza incansable, rey de la virilidad masculina, protector del olimpo y de los ejércitos, caudillo de los rebeldes, de los hombres justos, y ayudante de los débiles.</p>
            </div >
        )
    }
}

