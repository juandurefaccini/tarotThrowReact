import React from 'react'

export default class CarouselControl extends React.Component {

    render() {
        return (
            <div Style='text-align: center' >
                <button onClick={this.props.prevCard}>Prevoius</button>
                <button onClick={this.props.nextCard}>Next</button>
            </div >
        )
    }
}
