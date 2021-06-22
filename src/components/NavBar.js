import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor() {
        super()

        this.state = {
            navBarOpen: false,
        }
    }

    render() {

        const dropdownHandler = () => {
            const dropdownLinks = document.getElementById('dropdown-links');

            if(!this.state.navBarOpen) {
                this.setState({
                    navBarOpen: true,
                })
                dropdownLinks.style.display = 'block'
            } else {
                this.setState({
                    navBarOpen: false,
                })
                dropdownLinks.style.display = 'none'
            }
        }

        document.body.addEventListener('mouseup', (event) => {
            const dropdownLinks = document.getElementById('dropdown-links');
            const hamburger = document.getElementById('hamburger')

            if(this.state.navBarOpen && event.target !== hamburger) {
                this.setState({
                    navBarOpen: false,
                })
                dropdownLinks.style.display = 'none'
            }
        })
    
        return(
    
            <nav id='navbar-container'>
                <Link id='logo' to='/'>THE SHOP</Link>
                <div id='dropdown-links'>
                    <Link className='dropdown-link' to='/womensclothing'>women's clothing</Link>
                    <Link className='dropdown-link' to='/mensclothing'>men's clothing</Link>
                    <Link className='dropdown-link' to='/jewelery'>jewelery</Link>
                    <Link className='dropdown-link' to='/electronics'>electronics</Link>
                    <Link className='dropdown-link' to='/cart'>cart</Link>
                </div>
                <Link to='/cart'>
                    <p id='navbar-cart-total'>{this.props.cart.length}</p>
                </Link>
                <Link to='/cart'>
                    <i id='shopping-cart-icon' className="fas fa-shopping-cart"></i>
                </Link>
                <i onClick={() => dropdownHandler()} id='hamburger' className="fas fa-bars"></i>
            </nav>
        )
    }

}

export default NavBar