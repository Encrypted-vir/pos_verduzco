"use client";
import styles from "./CartPanel.module.css";
import CartTab from "./CartTab";
import CartActions from "./CartActions";
import { CartItem } from "../../types/pos";

interface CartPanelProps {
    activeCart: number;
    onChangeCart: (index: number) => void;
    items: CartItem[];
    onClear: () => void;
    onCharge: () => void;
}

export default function CartPanel({
    activeCart,
    onChangeCart,
    items,
    onClear,
    onCharge,
}: CartPanelProps) {
    const subtotal = items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <aside className={styles.panel}>
            {/* Cart tabs */}
            <CartTab activeCart={activeCart} totalCarts={3} onChange={onChangeCart} />

            {/* Cart items */}
            <div className={styles.cartItems}>
                {items.length === 0 ? (
                    <div className={styles.emptyCart}>
                        <span>🛒</span>
                        <p>Sin productos</p>
                    </div>
                ) : (
                    items.map((item) => (
                        <div key={item.product.id} className={styles.cartItem}>
                            <div className={styles.itemInfo}>
                                <span className={styles.itemName}>{item.product.name}</span>
                                <span className={styles.itemPrice}>
                                    ${(item.product.price * item.quantity).toFixed(2)}
                                </span>
                            </div>
                            <div className={styles.itemMeta}>
                                <span className={styles.itemQty}>x{item.quantity}</span>
                                <span className={styles.itemUnit}>${item.product.price.toFixed(2)} c/u</span>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Bottom actions */}
            <CartActions
                subtotal={subtotal}
                total={subtotal}
                itemCount={itemCount}
                onExactPayment={() => { }}
                onScan={() => { }}
                onClear={onClear}
                onCharge={onCharge}
            />
        </aside>
    );
}