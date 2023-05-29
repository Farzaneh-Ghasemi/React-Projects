import React, { Component } from 'react';
import '../accordion-styles/ProductComponent.css';
export default class ProductComponent extends Component {
    constructor() {
        super();
        this.state = {
            heartColorStatus: false
        }
    }
    changeColor = () => {
        this.setState({
            heartColorStatus: !this.state.heartColorStatus,
        })
    }
    render() {
        const { image, productName, productCost, children } = this.props
        return (
            <div className='product-container'>
                <img className='img-grid' src={image} alt={productName} />
                <h4>{productName}</h4>
                <h5>{productCost}$</h5>
                <p>{children}</p>
                    <i  className={`${this.state.heartColorStatus ? 'fa fa-heart color-active' : 'far fa-heart'}`}
                        onClick={this.changeColor} ></i>

            </div>
        )
    }
}

