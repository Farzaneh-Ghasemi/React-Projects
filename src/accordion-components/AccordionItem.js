import React, { Component } from 'react';
import ProductComponent from './ProductComponent';
import '../accordion-styles/AccordionItem.css';
import camera_1 from '../images/camera-5.jpg';
import camera_2 from '../images/camera-2.jpg';
import camera_3 from '../images/camera-3.jpg';
import camera_4 from '../images/camera-4.jpg';

export default class AccordionItem extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    "productId": 1,
                    "productName": "Product 1",
                    "productImg": camera_1,
                    "productCost": 19.99,
                    "productIntroduction": "Product 1 is a versatile digital product that offers various features."
                },
                {
                    "productId": 2,
                    "productName": "Product 2",
                    "productImg": camera_2,
                    "productCost": 14.99,
                    "productIntroduction": "Product 2 is a user-friendly digital product with a sleek design."
                },
                {
                    "productId": 3,
                    "productName": "Product 3",
                    "productImg": camera_3,
                    "productCost": 24.99,
                    "productIntroduction": "Product 3 is a powerful digital product designed for professional use."
                },
                {
                    "productId": 4,
                    "productName": "Product 4",
                    "productImg": camera_4,
                    "productCost": 29.99,
                    "productIntroduction": "Product 4 is an innovative digital product that brings cutting-edge technology."
                }
            ]

        }
    }
    render() {
        return (
            <div className='product-item-container'>
                {this.state.products.map((item) => (

                    <ProductComponent
                        image={item.productImg}
                        productName={item.productName}
                        productCost={item.productCost}
                        key={item.productId}
                    >
                        {item.productIntroduction}
                    </ProductComponent>
                ))
      }
            </div>
        )
    }
}
