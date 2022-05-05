import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import CategoryPreview from "../../components/category-preview/category-preview.components";

const CategoroiesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <div className="categoroies-preview-container">
            {
                Object.keys(categoriesMap).map((title) => (
                    <CategoryPreview key={title} title={title} products={categoriesMap[title]} />

                ))}
        </div>
    );
};


export default CategoroiesPreview;