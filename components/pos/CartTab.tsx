"use client";
import styles from "./CartTab.module.css";

interface CartTabProps {
    activeCart: number;
    totalCarts: number;
    onChange: (index: number) => void;
}

export default function CartTab({ activeCart, totalCarts, onChange }: CartTabProps) {
    return (
        <div className={styles.tabs}>
            {Array.from({ length: totalCarts }).map((_, i) => (
                <button
                    key={i}
                    className={`${styles.tab} ${activeCart === i ? styles.active : ""}`}
                    onClick={() => onChange(i)}
                >
                    VENTA {i + 1}
                </button>
            ))}
        </div>
    );
}