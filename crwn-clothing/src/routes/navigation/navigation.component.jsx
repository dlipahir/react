import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { ReactComponent as CrwnLogo } from '../../asserts/097 crown.svg'
import { signOutUser } from '../../utlis/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdowm/cart-dropdowm.component'
import { CartContext } from '../../contexts/cart.context'
import './navigation.styles.scss'


function Navigation() {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    // setIsCartOpen(false);
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (<span className='nav-link' onClick={signOutUser}>SIGN OUT</span>) : (
                            <Link className='nav-link' to='/auth'>
                                SIGN IN
                            </Link>
                        )
                    }

                    {/* <div onClick={isCartOpenhand}>  */}
                    <CartIcon />
                    {/* </div> */}
                </div>
                {isCartOpen && <CartDropdown />}

            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;