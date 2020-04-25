import React from 'react';

class Card extends React.PureComponent {

    render(){
        const cardClass =  this.props.className ? `card-container ${this.props.className}` : 'card-container';
        return (<div className={cardClass}>
                    <header className='card-header'>
                        <h4 className='card-header-title'>Card Header</h4>
                    </header>
                    <section className='card-section'>
                    {this.props.children}
                    </section>
                </div>)
    }
}

export default Card