import './CardCarousel.css'
import Card from './Card'
import CarouselControl from './CarouselControl.js'
import GetResultsButton from './GetResultsButton.js'
import React, { useState } from 'react';
import CardsJson from 'src/components/results/cards.json'

export default class CardsCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardNumber: 0,
            cardList: []
        };
    }

    componentWillMount() {
        CardsJson.map((card) => {
            return (
                this.state.cardList.push(JSON.parse(card))
            )
        })
        console.log('listo: ' + this.state.cardList)
    }

    nextCard = () => {
        this.setState({
            cardNumber: this.state.cardNumber + 1
        })
    }

    prevCard = () => {
        this.setState({
            cardNumber: this.state.cardNumber - 1
        })
    }

    render() {
        return (
            <div className='CardsCarousel' >
                {/* <div>{this.state.cardList[0].toString}</div> */}
                {/* <Card className='CardsCarousel__Card' cardNumber={this.array[this.state.cardNumber]}></Card>} */}
                <CarouselControl className='CardsCarousel__CarouselControl' prevCard={this.prevCard} nextCard={this.nextCard} />
                <GetResultsButton className='CardsCarousel__GetResultsButton' cardNumber={this.state.cardNumber} />
            </div >
        )
    }
}
