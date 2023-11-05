import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../context/CartProvider";
import "./Cart.css"

export default function Cart() {

    const cartCheckboxId = useId()
    const { cart, addCart, removeCart, clearCart } = useCart()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId} >
                <CartIcon />
            </label>

            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className="cart">
                <ul>
                    {cart.length ? (
                        <>
                            {cart.map(product => (
                                <li key={product.id}>
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                    />
                                    <div>
                                        <strong>{product.title} </strong> - ${product.price * product.qty}
                                    </div>

                                    <footer>
                                        <small>
                                            {product.qty}
                                        </small>
                                        <button
                                            onClick={() => addCart(product)}
                                        >+</button>
                                    </footer>
                                </li>
                            ))}
                        </>
                    ) : (
                        <>
                            <li>
                                <strong>Carrito vacio</strong>
                            </li>
                        </>
                    )}
                </ul>
                <button
                    className="clear-cart"
                    onClick={clearCart}
                >
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}
