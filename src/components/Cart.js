import React, {useState} from 'react';
import CartItem from './CartItem';

const Cart = (props) => {

    const allItems = props.items;

    const cartIdsLooped = () => {
            let items = []
            for(const id of props.cart) {
                items.push({key: id.key,item: allItems.find( item => item.id == id.itemId)})
            }
            return items
        }

    const [cart, setCart] = useState(cartIdsLooped)

        const subtotal= () => {

            if(cart.length > 0) {
                const cartStateItemsMappedForPrices = cart.map(item => {
                    return item.item.price
                })

                const result = cartStateItemsMappedForPrices.reduce((a,b) => {
                    return a + b
                })

                return result.toFixed(2)
            } else {
                return 0
            }
        }

        cartIdsLooped()
        subtotal()

        const amountOfCartItems = () => {
            return props.cart.length === 1 ? `(${props.cart.length} item)` : `(${props.cart.length} items)`
        }

        const deleteItemHandler = (key) => {
            props.setAppJSState({
                cart: props.cart.filter( item => item.key != key)
            })

            setCart(cart.filter( item => item.key != key))

        }

        const clearCartHandler = () => {
            props.setAppJSState({
                cart: []
            })

            setCart([])

        }

        const cartButtons = () => {
            return(
                <div>
                    <button onClick={() => {alert("This is a fake store. This is as far as we'll go with the ruse.")}}>proceed to checkout</button>
                    <button onClick={() => clearCartHandler()}>clear cart</button>
                </div>
            )
        }

        return(
            <div id='cart'>
                {
                    cart.length > 0 ? <h2>Subtotal: ${`${subtotal()}`} {amountOfCartItems()}</h2> : <h2 style={{textAlign: 'center'}}>No items in your cart</h2>
                }

                {
                    cart.length > 0 ? cartButtons() : null
                }

                {
                    cart.map( cartItem => <CartItem deleteItemHandler={deleteItemHandler} key={cartItem.key} itemKey={cartItem.key} image={cartItem.item ? cartItem.item.image : null} title={cartItem.item ? cartItem.item.title : null} price={cartItem.item ? cartItem.item.price : null} description={cartItem.item ? cartItem.item.description : null}/>)
                }

                {
                    cart.length > 2 ?  cartButtons() : null
                }
            </div>
        )
}

export default Cart