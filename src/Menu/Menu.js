import React, { Component } from 'react';
import BurgerMenu from 'react-burger-menu';
import './Menu.css'

class SideMenu extends Component {

    constructor (props) {
        super(props);
        this.state = {
          currentMenu: 'scaleRotate'
        };
    }

      getItems() {

          return [
              <h1>Title</h1>,
              <a onClick={this.ShowTasks}><span>Reading List</span></a>
          ];

      }

    ShowTasks(event) {
        event.preventDefault();
        alert('Tasks');
    }

      getMenu() {

        const Menu = BurgerMenu[this.state.currentMenu];
          return(

                  <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
                    {this.getItems()}
                  </Menu>

          );
        }


      render() {

        return (
          <div id="outer-container" >
            {this.getMenu()}
          </div>
        );
      }

}

export default SideMenu;
