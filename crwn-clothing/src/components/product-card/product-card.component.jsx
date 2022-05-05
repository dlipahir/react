import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import './product-card.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
// import Button from '../button/button.component'

const ProductCard = ({ product }) => {
    const { addItemtoCart } = useContext(CartContext);

    const addItemtoCarthandler = () => {
        addItemtoCart(product);
    }

    const { name, price, imageUrl } = product;
    return (
        <div className='product-card-container'>
            <img src={imageUrl} />
            <div className='footer'>
                <div className="name">{name}</div>
                <span className="price">{price}</span>
            </div>
            <Button ButtonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => addItemtoCarthandler()} >Add To Cart</Button>
        </div>
    )
}

export default ProductCard;