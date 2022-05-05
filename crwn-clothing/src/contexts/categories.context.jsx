import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments, getCollectionAndDocuments } from "../utlis/firebase/firebase.utils.js";
import SHOP_DATA from '../shop-data.js'


export const CategoriesContext = createContext({
    products: [],
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState([]);
    useEffect(() => {
        const getcategoriesMap = async () => {
            const categoriesMap = await getCollectionAndDocuments();
            // console.log(categoriesMap);
            setCategoriesMap(categoriesMap);
        }
        getcategoriesMap();
    }, [])
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, [])
    const value = { categoriesMap };
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}