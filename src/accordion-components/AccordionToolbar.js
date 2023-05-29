import React, { Component } from 'react'
import AccordionHeader from './AccordionHeader';
import AccordionItem from './AccordionItem';
import '../accordion-styles/AccordionToolbar.css';

class AccordionToolbar extends Component {
  constructor() {
    super();
    this.state = {
      menuStatus: false,
    };
  }

  toggleToolbar = () => {
    console.log(this.state.menuStatus);
    this.setState((prevState) => ({
      menuStatus: !prevState.menuStatus
    }));
  }

  render() {
    return (
      <div className="accordion-toolbar" >
        <div onClick={this.toggleToolbar}>
          <AccordionHeader menuStatus={this.state.menuStatus} />
        </div>
        <div className={`menu-container ${this.state.menuStatus ? 'menuon' : 'menuoff'}`}>
          {this.state.menuStatus && <AccordionItem />}
        </div>
      </div>
    );
  }
  }
export default AccordionToolbar;