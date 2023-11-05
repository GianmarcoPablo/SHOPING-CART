import { createContext, useContext } from "react";
import useFilters from "../useFilters";

const ProductContext = createContext();

export const useProducts = () => {
    if (!ProductContext) throw new Error("useProducts debe estar dentro del proveedor ProductcProvider")
    return useContext(ProductContext)
}

export default function ProductcProvider({ children }) {

    const { filters, products, setFilters } = useFilters()

    return (
        <ProductContext.Provider value={{
            filters,
            products,
            setFilters
        }}>
            {children}
        </ProductContext.Provider>
    )
}
