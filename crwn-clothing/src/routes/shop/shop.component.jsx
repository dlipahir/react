import { useParams } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import CategoroiesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import './shop.styles.scss'


const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoroiesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
};


export default Shop;