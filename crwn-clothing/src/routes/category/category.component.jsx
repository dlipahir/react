import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import './category.styles.scss'

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
            <h2 className='category-container-title'>{category.toUpperCase()}</h2>
            <div className="category-container">
                {products &&
                    products.map(product => (
                        <ProductCard product={product} />
                    ))
                }
            </div>
        </>
    )

}

export default Category;