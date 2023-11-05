import { useState } from "react"
import { products as initialProductos } from "./mocks/products.json"

export default function useFilters() {

    const [products] = useState(initialProductos)
    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 0
    })

    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice && (
                    filters.category === "all" || product.category === filters.category
                )
            )
        })
    }
    
    return {
        products: filterProducts(products),
        filters,
        setFilters
    }
}
