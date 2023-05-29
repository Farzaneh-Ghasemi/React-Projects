import React, { Component } from 'react';
import '../accordion-styles/AccordionHeader.css';
export default class AccordionHeader extends Component {
   
    render() {
        const {menuStatus}=this.props;
        console.log(menuStatus)
        return (
         
            <div className={`accordion-header ${menuStatus ?'menu-off':'menu-on'} `} >
                <div className='side-header left-side-header'>
                    <i> Digital Products</i>
                </div>
                <div className='side-header right-side-header'>
                <i className="fa fa-chevron-up" ></i>
                </div>
            </div>
        )
    }
}
