//import './cart-dropdowm.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdowm.styles'
const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckout = () => navigate('/checkout')
    return (
        <CartDropdownContainer>
            <cartItems>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))) : <EmptyMessage>Cart is Empty</EmptyMessage>
                }
            </cartItems>
            <Button onClick={() => goToCheckout()} >CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;