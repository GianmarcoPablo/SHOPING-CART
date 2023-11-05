import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"

export default function Product({ product, addCart, removeFromCart, cart }) {

    const existsCart = product => {
        return cart.some(item => item.id === product.id)
    }
    return (
        <li key={product.id}>
            <img
                src={product.thumbnail}
                alt={product.title}
            />
            <div>
                <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
                {existsCart(product) ? (
                    <button
                        onClick={() => removeFromCart(product.id)}
                    >Eliminar</button>
                ) : (
                    <button
                        onClick={() => addCart(product)}
                    >Agrgar</button>
                )}
            </div>
        </li>
    )
}
