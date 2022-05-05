import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../asserts/shopping-bag.svg";
//import './cart-icon.styles.jsx'
import { CartIconConatiner, ShopIcon, ItemCount } from "./cart-icon.styles";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItems, cartCount } = useContext(CartContext)
    //const itemCount = cartItems.reduce((acc, val) => acc + val.quantity, 0);
    const toggleisCartOpen = () => { setIsCartOpen(!isCartOpen) }


    return (
        <CartIconConatiner onClick={toggleisCartOpen}>
            <ShopIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconConatiner>
    )
}

export default CartIcon