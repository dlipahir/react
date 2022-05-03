import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../asserts/shopping-bag.svg";
import './cart-icon.styles.scss'
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItems, cartCount } = useContext(CartContext)
    //const itemCount = cartItems.reduce((acc, val) => acc + val.quantity, 0);
    const toggleisCartOpen = () => { setIsCartOpen(!isCartOpen) }


    return (
        <div className="cart-icon-container" onClick={toggleisCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className="item-count">{cartCount}</span>
        </div>
    )
}

export default CartIcon