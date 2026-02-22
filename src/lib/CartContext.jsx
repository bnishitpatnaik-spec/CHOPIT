import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    const addToCart = (product, cut) => {
        setItems(prev => {
            const existing = prev.find(i => i.id === product.id && i.cut === cut);
            if (existing) {
                return prev.map(i =>
                    (i.id === product.id && i.cut === cut)
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }
            return [...prev, { ...product, cut, quantity: 1 }];
        });
    };

    const removeFromCart = (id, cut) => {
        setItems(prev => prev.filter(i => !(i.id === id && i.cut === cut)));
    };

    const total = items.reduce((sum, item) => sum + (item.pricePerKg * item.quantity), 0);
    const count = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, total, count }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
