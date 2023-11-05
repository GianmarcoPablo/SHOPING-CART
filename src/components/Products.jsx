import "./Products.css"
import { useProducts } from "../context/ProductcProvider"
import { useCart } from "../context/CartProvider"
import Product from "./Product"

export default function Products() {

    const { products } = useProducts()
    const { addCart, removeFromCart, cart } = useCart()


    return (
        <main className="products">
            <ul>
                {products.map(product => (
                    <Product 
                        key={product.id}
                        product={product}
                        addCart={addCart}
                        removeFromCart={removeFromCart}
                        cart={cart}
                    />
                ))}
            </ul>
        </main>
    )
}
