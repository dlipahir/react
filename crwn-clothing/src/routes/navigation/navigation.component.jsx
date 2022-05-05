import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { ReactComponent as CrwnLogo } from '../../asserts/097 crown.svg'
import { signOutUser } from '../../utlis/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdowm/cart-dropdowm.component'
import { CartContext } from '../../contexts/cart.context'
//import './navigation.styles.jsx'
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles'


function Navigation() {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    // setIsCartOpen(false);
    return (
        <Fragment>

            <NavigationContainer>

                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) : (
                            <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}

            </NavigationContainer>

            <Outlet />
        </Fragment>
    );
}

export default Navigation;