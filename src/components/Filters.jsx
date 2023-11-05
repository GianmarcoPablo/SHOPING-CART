import { useId } from "react"
import "./Filters.css"
import { useProducts } from "../context/ProductcProvider"
export default function Filters() {

    const { filters, setFilters } = useProducts()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Price</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min={0}
                    max={1000}
                    onChange={e => {
                        setFilters({ ...filters, minPrice: e.target.value })
                    }}
                />
                <output htmlFor="price">${
                    filters
                        .minPrice
                        .toLocaleString("en-US", { minimumFractionDigits: 2 })
                }</output>
            </div>
            <div>
                <label htmlFor="category">Categorys</label>
                <select
                    onChange={e => setFilters({ ...filters, category: e.target.value })}
                    id={categoryFilterId}
                >
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Phones</option>
                </select>
            </div>
        </section >
    )
}
