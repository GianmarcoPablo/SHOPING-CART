import { createContext, useState, useContext } from "react";
import { useProducts } from "./ProductcProvider";

const ProductContext = createContext();

export const useCart = () => useContext(ProductContext)

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([])

    const addCart = product => {
        if (cart.some(item => item.id === product.id)) {
            const newCart = cart.map(item => {
                return item.id === product.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
            })
            setCart(newCart)
        } else {
            setCart([...cart, { ...product, qty: 1 }])
        }
    }


    const clearCart = () => {
        setCart([])
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter(item => item.id !== id)
        setCart(newCart)
    }


    return (
        <ProductContext.Provider value={{
            cart,
            addCart,
            clearCart,
            removeFromCart
        }}>
            {children}
        </ProductContext.Provider>
    )
}
