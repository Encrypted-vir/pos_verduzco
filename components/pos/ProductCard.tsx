"use client";
import styles from "./ProductCard.module.css";
import { Product } from "@/types/pos";

interface ProductCardProps {
    product: Product;
    onAdd: (product: Product) => void;
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
    return (
        <div className={styles.card} onClick={() => onAdd(product)}>
            {/* Top actions */}
            <div className={styles.topRow}>
                <button
                    className={styles.favoriteBtn}
                    onClick={(e) => e.stopPropagation()}
                >
                    ♡
                </button>
                <button
                    className={styles.menuBtn}
                    onClick={(e) => e.stopPropagation()}
                >
                    ⋮
                </button>
            </div>

            {/* Product image or no-barcode placeholder */}
            <div className={styles.imageWrapper}>
                {product.noBarcode ? (
                    <div className={styles.noBarcodeIcon}>
                        <span>🚫</span>
                        <div className={styles.barcodeLines}>
                            {Array.from({ length: 8 }).map((_, i) => (
                                <div key={i} className={styles.barcodeLine} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className={styles.productImage}>
                        {/* Replace with next/image for production */}
                        <span className={styles.imagePlaceholder}>🥤</span>
                    </div>
                )}
            </div>

            {/* Product info */}
            <div className={styles.info}>
                <p className={styles.name}>{product.name}</p>
                <div className={styles.priceRow}>
                    <span className={styles.unit}>{product.unit}</span>
                    <span className={styles.price}>${product.price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}