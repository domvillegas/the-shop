import React, { Component } from "react";
import { BrowserRouter, Route, } from 'react-router-dom';
import { fetchData } from '../apis/fakeStoreAPI.js';
import NavBar from './NavBar.js';
import WomensClothing from './WomensClothing.js';
import MensClothing from './MensClothing.js';
import Jewelry from './Jewelry.js';
import Electronics from './Electronics.js';
import Loading from './Loading.js'
import TheShopTitle from './TheShopTitle.js'
import HomePage from './HomePage.js';
import Cart from './Cart.js'
import ItemInfo from './ItemInfo.js'

class App extends Component {
    constructor() {
        
        super();

        this.state = {
            items: [],
            cart: [],
            cartCount: 0,
            keyCount: 0,
            itemInfo: []
        }

    }

    componentDidMount() {
        const setState = this.setState.bind(this)

        fetchData(setState);
    }

    itemInfoHandler = (event) => {

        const selectedItem = this.state.items.filter(item => item.id == event.target.parentNode.parentNode.parentNode.getAttribute('id'));

        this.setState({
            itemInfo: selectedItem
        })

    }

    render() {
        const setState = this.setState.bind(this)

        return(
            
            <React.Fragment>
                <BrowserRouter>
                <NavBar cartCount={this.state.cartCount} cart={this.state.cart}/>
                <div>
                    <Route path='/' exact>
                        <TheShopTitle />
                        {this.state.items.length > 0 ? <HomePage cartCountStateValue={this.state.cartCount} items={this.state.items}/> : <Loading />}
                    </Route>
                    <Route path='/womensclothing'>
                        <h1 className='page-title'>Women's Clothing</h1>
                        {this.state.items.length > 0 ? <WomensClothing itemInfoHandler={this.itemInfoHandler} keyCount={this.state.keyCount} cartCountStateValue={this.state.cartCount} cart={this.state.cart} setState={setState} items={this.state.items}/> : <Loading />}
                    </Route>
                    <Route path='/mensclothing'>
                        <h1 className='page-title'>Men's Clothing</h1>
                        {this.state.items.length > 0 ? <MensClothing itemInfoHandler={this.itemInfoHandler} keyCount={this.state.keyCount} cartCountStateValue={this.state.cartCount} cart={this.state.cart} setState={setState} items={this.state.items}/> : <Loading />}
                    </Route>
                    <Route path='/jewelery'>
                        <h1 className='page-title'>Jewelery</h1>
                        {this.state.items.length > 0 ? <Jewelry itemInfoHandler={this.itemInfoHandler} keyCount={this.state.keyCount} cartCountStateValue={this.state.cartCount} cart={this.state.cart} setState={setState} items={this.state.items}/> : <Loading />}
                    </Route>
                    <Route path='/electronics'>
                        <h1 className='page-title'>Electronics</h1>
                        {this.state.items.length > 0 ? <Electronics itemInfoHandler={this.itemInfoHandler} keyCount={this.state.keyCount} cartCountStateValue={this.state.cartCount} cart={this.state.cart} setState={setState} items={this.state.items}/> : <Loading />}
                    </Route>
                    <Route path='/cart'>
                        {this.state.items.length > 0 ? <Cart keyCount={this.state.keyCount} cartCountStateValue={this.state.cart.length} cart={this.state.cart} setAppJSState={this.setState.bind(this)} items={ this.state.items}/> : <Loading />}
                    </Route>
                    <Route path='/info'>
                        <ItemInfo itemInfo={this.state.itemInfo} keyCount={this.state.keyCount} cartCountStateValue={this.state.cartCount} cart={this.state.cart} setState={setState}/>
                    </Route>
                </div>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default App