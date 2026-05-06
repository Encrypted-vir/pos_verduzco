"use client";
import styles from "./CartActions.module.css";

interface CartActionsProps {
    subtotal: number;
    total: number;
    itemCount: number;
    onExactPayment: () => void;
    onScan: () => void;
    onClear: () => void;
    onCharge: () => void;
}

export default function CartActions({
    subtotal,
    total,
    itemCount,
    onExactPayment,
    onScan,
    onClear,
    onCharge,
}: CartActionsProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.totals}>
                <div className={styles.subtotalRow}>
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className={styles.totalRow}>
                    <span>Productos {itemCount.toFixed(1)}</span>
                    <span className={styles.totalAmount}>Total ${total.toFixed(2)}</span>
                </div>
            </div>

            <div className={styles.buttons}>
                <button className={styles.actionBtn} onClick={onExactPayment}>
                    <span className={styles.btnIcon}>💵</span>
                    <span>Cobro Exacto</span>
                </button>
                <button className={styles.actionBtn} onClick={onScan}>
                    <span className={styles.btnIcon}>📷</span>
                    <span>Escanear</span>
                </button>
                <button className={styles.actionBtn} onClick={onClear}>
                    <span className={styles.btnIcon}>🗑️</span>
                    <span>Limpiar</span>
                </button>
                <button className={`${styles.actionBtn} ${styles.chargeBtn}`} onClick={onCharge}>
                    <span className={styles.btnIcon}>💳</span>
                    <span>Cobrar</span>
                </button>
            </div>
        </div>
    );
}